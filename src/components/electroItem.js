import React from 'react'
import '../css/reset.css'
import '../css/ElectroItem.css'


const ElectroItem = ({ name, description, cover, price }) => {
    return (

        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <img src={cover} alt={name} className="card-img-top"/>
                <div className="card-body bg-dark">
                    <h1>{name}</h1>
                    <p className="card-text">{description}</p>
                    <h3 className="btn btn-primary">{price} FCFA</h3>
                </div>
            </div>
        </div>

    )

}

export default ElectroItem