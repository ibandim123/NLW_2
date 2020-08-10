import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
              <img 
                src="https://avatars0.githubusercontent.com/u/59544620?s=460&u=af83ed4fc8c4c005a8fcd4f0401f92acc485bfa7&v=4" 
                alt="Minha foto"
                />
            <div>
              <strong>Isaac Costa</strong>
              <span>Física</span>
            </div>

            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
              ipsam nihil modi.
              <br />
              <br />
              Fugit voluptatem sit eveniet tenetur hic eaque, dolorum nisi reiciendis
              voluptates. Minima atque aliquam accusantium fugit debitis dolor!
            </p>

            <footer>
              
              <p>
                Preço/hora 
                <strong>R$ 80,00</strong>
              </p>

              <button
              type="button">
                <img src={whatsappIcon} alt="Icone do Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
          </article>
    )
}

export default  TeacherItem;