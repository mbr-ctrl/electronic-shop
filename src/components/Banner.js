import React from 'react'
import logo from '../assets/logo.png'
import '../css/Banner.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Banner = () => {
    const title = 'Electronic Shop'
    return(
        <div className="float-end">
            <img src={logo} className="rounded float-end" alt="Site de composants electroniques" />
            <h1 className="elect-title"> {title} </h1>

        </div>
    )
}

export default Banner