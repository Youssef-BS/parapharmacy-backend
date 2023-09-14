import React from "react";
import NavbarSet from "./components/navbar/Navbar";
import  Name from "./components/name project/Name";
import  Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Content from "./components/content page/Content";


function App() {
  const divStyle = {
    fontFamily: 'Times New Roman',
  };

  return (
    <div style={divStyle}>
      <Name />
      <NavbarSet />
      <Container /> 
      <Content />
      <Footer />
    </div>
  );
}

export default App;
