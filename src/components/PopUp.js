import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import "./components.css"
const PopUp = ({ msg ,update}) => {
    let myStyle = {
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "2",
        border: "2px solid black",
        backgroundColor: "rgba(180, 180, 180, 0.727)",
        display:"grid",
        placeItems:"center"
    }
    let divStyle={
        width:"50%",
        color:"black",
        height:"40vh",
        border:"2px solid black",
        backgroundColor:"white",
        display:"grid",
        placeItems:"center"
    }
    
    const theme=useContext(ThemeContext)
    if(theme==="dark")
    {
        divStyle.backgroundColor="#565254"
        divStyle.color="white"
    }
    else{
        divStyle.backgroundColor="white"
        divStyle.color="black"
    }
    return (
        <div style={myStyle}>
            <div style={divStyle}>
                <p>E-mail send successfully</p>
                <button onClick={()=>update(false)} id="pop-up-btn">OK</button>
            </div>
        </div>
    )
}

export default PopUp;