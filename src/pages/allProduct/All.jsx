import React from 'react'
import Form from 'react-bootstrap/Form';
import "./allproduct.css";

const All = () => {
  return (
    <div>
        <div className="filter">
        <div className="element">
          <Form.Select aria-label="Default select example" >
            <option value="">accessoires</option>
            <option value="accessoires hypoallergique">accessoires hypoallergique</option>
            
          </Form.Select>
        </div>
        <div className="element">
          <Form.Select aria-label="Default select example" >
            <option value="">Categorie</option>
            <option value="adultes">Adultes</option>
            <option value="enfants">Enfants</option>
          </Form.Select>
        </div>
        <div className="element">
          <Form.Select aria-label="Default select example" >
            <option value="">skinny</option>
            <option value="Visage">Visage</option>
            <option value="Corps">Corps</option>
            <option value="Cheveux">Cheveux</option>
            <option value="Compléments">Compléments</option>
            <option value="maquillage">maquillage</option>
            <option value="nutrition sportive">nutrition sportive</option>
          </Form.Select>
        </div>
    </div>
    <div className="swiper-container">
        <div className="swiper-wrapper">
 <div className="swiper-slide">
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
     </div>
    </div>
    </div>

    </div>
  )
}

export default All ;