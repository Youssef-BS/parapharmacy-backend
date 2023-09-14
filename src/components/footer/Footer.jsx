import React from "react";
import "./footer.css";
import logo from "../navbar/logo.jpeg";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
            <img src={logo} alt="logo" />
        
        <div className="item">
          <h1>Categories</h1>
          <span>Femmes</span>
          <span>Hommes</span>
          <span>Enfants</span>
          <span>Animaux</span>
          <span>Maison</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>A propos</h1>
  <span>testttttttttttsdkgfiusdgfuisdfgusivfuisdg</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          
        </div>
      </div>
      
    </div>
  );
};

export default Footer;