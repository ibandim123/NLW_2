import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css'

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function Teacherform() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [whatsapp, setWhat] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');



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
  
  function setScheduleItemsValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItems, index ) => {
      if( index === position ) {
          return { ... scheduleItems,[field]: value }
      }
      return  scheduleItems;
    })
    
    //setScheduleItemsValue(updatedScheduleItems)
    
  
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems,
    })

  }

    return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrível que você quer dar aulas!"
        description = "O primeiro passo é preencher o formulário de inscrição"
        />  

        <main>
          <form onSubmit={handleCreateClass} >
          <fieldset>
            <legend>Seus dados</legend>
          
              <Input 
               name="name"
               label="Nome Completo"
                value={name}
                onChange={(e) => {setName(e.target.value)}} /> 
              <Input 
               name="avatar"
               label="Avatar"
               value={avatar}
               onChange={(e) => {setAvatar(e.target.value)}} />
              
              <Input 
               name="whatsapp"
               label="Whatsapp"
               value={whatsapp}
               onChange={(e) => {setWhat(e.target.value)}} />
               
              <Textarea 
               name = "bio" 
               label = "Biografia"
               value={bio}
               onChange={(e) => {setBio(e.target.value)}}
               />

          </fieldset>

          <fieldset>
            <legend>Sobre aula</legend>
          
              <Select 
                name="subject"
                label="Matéria"
                value={subject}
                onChange={(e) => { setSubject(e.target.value) }}
                options = {[
                  { value: 'Artes' , label: 'Artes'},
                  { value: 'Biologia' , label: 'Biologia'},
                  { value: 'Matemática' , label: 'Matemática'},
                  { value: 'Física' , label: 'Física'},
                  { value: 'Química' , label: 'Química'},
                  { value: 'Geografia' , label: 'Geografia'},
                ]}

               />
              <Input 
                name="cost" 
                label="Custo da sua aula por hora"
                value={cost}
                onChange={(e) => { setCost(e.target.value) }}  
              /> 
             
             
          </fieldset>
          

          <fieldset>
            <legend>Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

           {scheduleItems.map((scheduleItems, index) => {
             return (
              <div key={scheduleItems.week_day} className="schedule-item">
                <Select 
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItems.week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
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

                  <Input 

                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItems.from}
                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}                    
                
                  />

                  <Input 
                  
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItems.to}
                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}                  
                  />

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
            <button type="submit"> 
            Salvar Cadtastro
            </button>
          </footer>
          </form>

        </main>
      </div>
      )
  } 
  
export default Teacherform;