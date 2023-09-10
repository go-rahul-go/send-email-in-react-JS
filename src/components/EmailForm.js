import React, { useContext, useState } from 'react'
import emailjs from "@emailjs/browser"
import "./components.css"
import PopUp from './PopUp'
import { ThemeContext } from '../App'
const EmailForm = () => {
    const [data, setData] = useState({ name: "", email: "", data: "" })
    const [mailSend, updateMailSend] = useState(false)
    const theme=useContext(ThemeContext);
    let style={
        backgroundColor:"",
        color:"",
        borderColor:""
    }
    if(theme==="dark")
    {
        style.backgroundColor="#2B2C28"
        style.color="#FFFAFB"
        style.borderColor="#FFFAFB"
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            to_name: "rahul goswami",
            message: data.message
        }
        const serviceId = process.env.REACT_APP_SERVICE_ID
        const publicKey = process.env.REACT_APP_PUBLIC_KEY
        const templateId = process.env.REACT_APP_TEMPLATE_ID

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("mail send")
                updateMailSend(true)
                setData({ name: "", email: "", message: "" })
            })
            .catch((error) => {
                updateMailSend(false)
                console.log("something went wrong")

            })
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value;

        setData((prevVal) => {
            switch (name) {
                case "name":
                    return {
                        name: value,
                        email: prevVal.email,
                        message: prevVal.message
                    }
                case "email":
                    return {
                        name: prevVal.name,
                        email: value,
                        message: prevVal.message
                    }
                case "message":
                    return {
                        name: prevVal.name,
                        email: prevVal.email,
                        message: value
                    }
                default:
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="email" style={style}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" value={data.name} id="name" name="name" onChange={(e) => handleChange(e)} required />
                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" value={data.email} id="email" name="email" onChange={(e) => handleChange(e)} required />
                </div>
                <div>
                    <label htmlFor='message'>Your Message</label>
                    <textarea type="text" value={data.message} name="message" onChange={(e) => handleChange(e)} maxLength={250} id="message" required />
                </div>
                <div>
                    <button id='btn'>Submit</button>
                </div>
            </form>
            {(mailSend) ? <PopUp msg="send successfully" update={updateMailSend} /> : ""}
        </>
    )
}

export default EmailForm;