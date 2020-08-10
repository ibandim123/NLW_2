import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css'
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function Teacherform() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ])

  function addNewScheduleItem() {

    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ]) 
  }


    return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrível que você quer dar aulas!"
        description = "O primeiro passo é preencher o formulário de inscrição"
        />  

        <main>
          <fieldset>
            <legend>Seus dados</legend>
          
              <Input name="name" label="Nome Completo"/>
              <Input name="avatar" label="Avatar"/> 
              <Input name="whatsapp" label="Whatsapp"/> 
              <Textarea name = "bio" label = "Biografia" />

          </fieldset>

          <fieldset>
            <legend>Sobre aula</legend>
          
              <Select 
                name="subject"
                label="Matéria"
                options = {[
                  { value: 'Artes' , label: 'Artes'},
                  { value: 'Biologia' , label: 'Biologia'},
                  { value: 'Matemática' , label: 'Matemática'},
                  { value: 'Física' , label: 'Física'},
                  { value: 'Química' , label: 'Química'},
                  { value: 'Geografia' , label: 'Geografia'},
                ]}

               />
              <Input name="cost" label="Custo da sua aula por hora"/> 
             
             
          </fieldset>

          <fieldset>
            <legend>Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

           {scheduleItems.map(scheduleItems => {
             return (
              <div key={scheduleItems.week_day} className="schedule-item">
                <Select 
                    name="week_day"
                    label="Dia da Semana"
                    options = {[
                      { value: '0' , label: 'Domingo'},
                      { value: '1' , label: 'Segunda-feira'},
                      { value: '2' , label: 'Terça-feira'},
                      { value: '3' , label: 'Quarta-feira'},
                      { value: '4' , label: 'Quinta-feira'},
                      { value: '5' , label: 'Sexta-feira'},
                      { value: '6' , label: 'Sábado'},
                    
                    ]}
                  />
                  <Input name="from" label="Das" type="time"/>
                  <Input name="to" label="Até" type="time"/>
              </div>
             )
           })}
            
          </fieldset>

          <footer> 
            <p>
              <img src = {warningIcon} alt = "Icone de Aviso" /> 
               Importante! <br/>
               Preenchar todos os dados            
            </p>
            <button type = "button"> 
            Salvar Cadastro
            </button>
          </footer>

        </main>
      </div>
      )
  } 
  
export default Teacherform;