import React from 'react'
import "./details.css";

const Details = () => {
  return (
    <div className='details' >
        <div className='foto'>
            <img src='https://static1.squarespace.com/static/5d14e8bfa505890001205e37/5d1e2226cedf7500010cec8c/60b099c2fd0b152b77775340/1623906059552/mariage-quels-types-de-produits-choisir-pour-son-maquillage-de-mariee-conseils-pauuulette.JPG?format=1500w' alt=""/>
        </div>
        <div className='caracteristique'>
         caracteristique
         <hr />
         <div className='description'>test test test</div>
         <div className='categories'>test test test</div>
         <div className='prix produit'>30 dt</div>
         <div className='prix'>passez commandes</div>
        </div>
    </div>
  )
}

export default Details