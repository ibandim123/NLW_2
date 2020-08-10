import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' //Para não recarregar a página ao clicar
import logoimg from '../../assets/images/logo.svg'
import landingimg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

import './style.css';

function Landing() {
    const [totalConnection, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            
            console.log(res)
            /*const { total } = res.data;

            setTotalConnections(total);*/
        })
    }, []) //Uma função que recebe dois parâmetros, o primeiro é uma função e o segundo é um array que contém informação que vão disparar assim que a variável mudar.

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoimg} alt="proffy" />
                    <h2> Sua plataforma de estudos online</h2>             
                </div>
            
                <img 
                src={landingimg}
                alt="Plataforma de estudos" 
                className="hero-image"
                />

                <div className ="buttons-container">

                    <Link to="/study" className ="study">
                        <img src={studyIcon} alt="Estudar" />
                            Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>
               
                </div>
                
                    <span className="total-connections">
                        Total de { totalConnection } conexões já realizadas<img src={purpleHeartIcon} alt="Coração Roxo"/>
                    </span>
                
            </div>

               
        </div>

        
    )
}

export default Landing