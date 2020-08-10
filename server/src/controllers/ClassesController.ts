import { Request , Response } from 'express'
import db from '../database/connections';
import convertHourToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem  {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    //Filtros de data
    async index( req:Request, res: Response) {
        const filters = req.query
        
        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        console.log(filters)

        if(!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error:'Missing filter classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        //Verificar se o usuário tem data disponivel
        const classes = await db('classes')
          .whereExists(function() {//verificar se existe
            this.select('class_schedule.*')//selecionar todos os campos da tabela schedule
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ?? ??',[Number(week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [ timeInMinutes])//Verificar horário 
            .whereRaw('`class_schedule`.`to` > ??', [ timeInMinutes])//O horário que ele para de trabalhar
          })
          .where('classes.subject','=', subject)
          .join('users', 'classes.user_id', '=', 'users.id')
          .select(['classes.*', 'users.*'])
          
        
          console.log(timeInMinutes)

        return res.json(classes)
    }
  
    async create (req: Request,res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
    
        //Desfazer a req, caso encontre algum erro
        const trx = await db.transaction()
    
        try {
            const insertsUsersIDs = await trx('users').insert({//tabela que fará a inserção do dados
                name,
                avatar,
                whatsapp,
                bio,
                
            }) 
        
            // O id do usuário para transferir para o classes
            const user_id = insertsUsersIDs[0]
        
        
        
          const insertedClassesIDs =  await trx('classes').insert({ //Dar olhada
                subject,
                cost,
                user_id,
            })
        
            const class_id =  insertedClassesIDs[0]
          
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => { 
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from), 
                    to: convertHourToMinutes(scheduleItem.to), 
                }
            })
        
            await trx('class_schedule').insert(classSchedule)
            
            await trx.commit()  
        
            return res.status(201).send('Sucesso...')
          
        } catch (err) {
    
            await trx.rollback()
    
            console.log(err)
            return res.status(400).json({
                error: "unexpected error while creating new class"
            })
    
        }
    };
} 