/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/logo.png'
import '../css/Banner.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Banner = () => {
    return (
        <div >
            <div className="banner">
                <a href="#">
                    <img src={logo} className="rounded float-start" alt="Site de composants electroniques" />
                </a>
                <h6> Contactez-nous au <br /> <span>+237 697349179 </span></h6>
                <h5>Tous vos composants <span>A petit prix</span> </h5>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                
  
            </nav>

        </div>
    )
}

export default Banner