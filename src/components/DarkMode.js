import React,{useRef} from 'react'
import "./components.css";

let toggleStyle={
    position: "absolute",
    top:"2%",
    right:"10px",
    width:"50px",
    height:"30px",
    borderRadius:"50px",
    border:"1px solid grey",
    backgroundColor: "rgb(179, 179, 179)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems: "center"
}

let buttonStyle = {
    width:"25px",
    height:"25px",
    backgroundColor: "rgb(227, 227, 227)",
    border:"2px solid rgb(99, 99, 99)",
    borderRadius:"50%"
}
const DarkMode = ({theme}) => {
    const styleRef=useRef();
    const setTheme = ()=>{
        if(styleRef.current.style.justifyContent === "flex-start")
        {
            
            styleRef.current.style.justifyContent = "flex-end";
            styleRef.current.style.backgroundColor="#18cdff"
            theme("dark")
        }
        else{
            styleRef.current.style.justifyContent = "flex-start";
            styleRef.current.style.backgroundColor="rgb(227, 227, 227)"
            theme("light")
        }
    }
  return (
    <div className="toggle" style={toggleStyle} onClick={setTheme} ref={styleRef}>
        <div className="toggle-btn" style={buttonStyle}></div>
    </div>
  )
}

export default DarkMode;