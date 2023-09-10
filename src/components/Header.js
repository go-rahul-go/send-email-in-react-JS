import React, { useContext } from 'react'
import "./components.css";


import { ThemeContext } from '../App';

const Header = () => {
  let headerStyle={
    backgroundColor:"rgb(255, 225, 0)",
    
  }
  let h1Style={color:"black"}
  const theme=useContext(ThemeContext)
  if(theme==="dark")
  {
    headerStyle.backgroundColor="#131515"
    h1Style.color="#FFFAFB"
  }
  else{
    headerStyle.backgroundColor="rgb(255, 225, 0)"
    h1Style.color="black"
  }
  return (
    <header style={headerStyle}>
        <img src={require("../assets/icons8-email-96.png")} alt="logo"/>
        <h1 style={h1Style}>e-mail-us</h1>
    </header>
  )
}

export default Header;