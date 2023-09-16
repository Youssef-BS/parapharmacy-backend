import React from 'react'
import "./content.css";

const Content = () => {
  return (
    <>
       <div className='name'>
        Notre Nouveaux Produits
        </div>
        <p className='Btn'>Voir plus</p>
    <div className='items'>
     <div className='contentItem bg-body-tertiary'>
     <img src='https://beautystore.tn/14869-large_default/rouge-a-levres-hydra-matte-.jpg' alt='img'/>
     <p>name</p>
     <p>description</p>
     <p>prix</p>
     </div>
     <div className='contentItem bg-body-tertiary'>
     <img src='https://beautystore.tn/14869-large_default/rouge-a-levres-hydra-matte-.jpg' alt='img'/>
     <p>name</p>
     <p>description</p>
     <p>prix</p>
     </div>
     <div className='contentItem bg-body-tertiary'>
     <img src='https://beautystore.tn/14869-large_default/rouge-a-levres-hydra-matte-.jpg' alt='img'/>
     <p>name</p>
     <p>description</p>
     <p>prix</p>
     </div>
     <div className='contentItem bg-body-tertiary'>
     <img src='https://beautystore.tn/14869-large_default/rouge-a-levres-hydra-matte-.jpg' alt='img'/>
     <p>name</p>
     <p>description</p>
     <p>prix</p>
     </div>
     <div className='contentItem bg-body-tertiary'>
     <img src='https://beautystore.tn/14869-large_default/rouge-a-levres-hydra-matte-.jpg' alt='img'/>
     <p>name</p>
     <p>description</p>
     <p>prix</p>
     </div>
    
    </div>
    <div className='name' style={{marginTop:"70px"}}>
        Notre Categories Disponible
        </div>
     
        <div className="catégoriesvedettes">
        <div className="collection-dispo">
        <div className="H"><div className="objet"><b>Hommes</b><p>article pour hommes<br /> <a href="/toustypeproduit/?categorie=hommes" style={{color : "black" , fontSize:"18px"}}>voir plus</a></p></div></div>
        <div className="F"><div className="objet"><b>Femmes</b><p>article pour femmes<br /><a href="/toustypeproduit/?categorie=femmes" style={{color : "black" , fontSize:"18px"}}>voir plus</a> </p></div></div>
        <div className="EL"><div className="objet"><b>Electronique</b><p>article pour electroniques<br /> <a href="/toustypeproduit/?categorie=electroniques" style={{color : "black" , fontSize:"18px"}}>voir plus</a></p></div></div>
        <div className="A"><div className="objet"><b>Animaux</b><p>article pour animaux<br /> <a href="/toustypeproduit/?categorie=animaux" style={{color : "black" , fontSize:"18px"}}>voir plus</a></p></div></div>
        <div className="E"><div className="objet"><b>Enfants</b><p>article pour enfants<br /><a href="/toustypeproduit/?categorie=enfants" style={{color : "black" , fontSize:"18px"}}>voir plus</a> </p></div></div>
        <div className="M"><div className="objet"><b>Maison</b><p>article pour maison<br /><a href="/toustypeproduit/?categorie=maison" style={{color : "black" , fontSize:"18px"}}>voir plus</a> </p></div></div>
        </div>  
        </div>      
    
      </>
    )
}

export default Content