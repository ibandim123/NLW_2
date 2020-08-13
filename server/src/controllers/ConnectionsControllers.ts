import { Request, Response } from 'express'
import db from "../database/connections"

export default class ConnectionsController { 
    async index( req : Request ,res: Response)  {

            const totalConnections = await db('connections').count('* as total');
        
            const { total } = totalConnections[0];
        
            return res.json({ total });   
    }


    async create( req : Request , res: Response ) {
        const { user_id } = req.body;
        
        await db('connections').insert({
            user_id,
        })

        return res.status(201).send()
    }

    async show( req: Request , res: Response ) { 
        
        const { id } = req.params; 

        const users = req.headers.authorization;

        const show = await db("users")
        .where("id",id)
        .select("id")
        .first();

        if(show.users!== users){
            return res.status(401).json({erro:"Operation not permitted."});

        }
        await db("users").where("id",id)
        return res.status(204).send();

    }
}