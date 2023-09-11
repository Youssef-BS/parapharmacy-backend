import React from "react";
import NavbarSet from "./components/navbar/Navbar";
import  Name from "./components/name project/Name";
import  Container from "./components/container/Container";

function App() {
  const divStyle = {
    fontFamily: 'Times New Roman',
  };

  return (
    <div style={divStyle}>
      <Name />
      <NavbarSet />
      <Container /> 
    </div>
  );
}

export default App;
