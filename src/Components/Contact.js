import { useState } from "react";
import { Link } from "react-router-dom";

function Contact(){
    const [data,setData]= useState({name:"", email:"", phone:"", message:""});

    function handleChange(e){
        const name= e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
    }

    return(
        <form method='post' onSubmit={handleSubmit}>
            <h1> Contact Us</h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter name" />
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="abc@gmail.com" />
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+1" />
            <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="Enter your Message..." />
            <button type="submit">Send</button>
            <p>{data.name},{data.email},{data.phone},{data.message}</p>
        </form>
    )
}

export default Contact;