import React, { useState } from "react";
import Mensaje from "./Mensaje";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  
  const [name,setName]=useState("")
  const [email, setEmail]=useState("")

  const [error,setError] =useState(false)
  const [show,setShow] = useState(false)
  
  const handleName= (e) =>{
      setName(e.target.value)
  }


  const handleEmail=(e) =>{
    setEmail(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (name.trim().length > 5 && regex.test(email) ) {
      setError(false)
      setShow(true)
      setTimeout(() => {
        setShow(false)
        reset()
      }, 3000);
      console.log(name);
      console.log(email);

    } else{
      setError(true)

    }
  }

  const reset =()=>{
    setEmail("")
    setName("")
  }


  return (
    <>
      { show ?
        <Mensaje name={name}></Mensaje>
      :(
            <form onSubmit={handleSubmit}> 
              <input type="text" value={name} placeholder="Name" onChange={handleName} />
              <input type="email" value={email} placeholder="Email" onChange={handleEmail}/>
      
              <button onSubmit={handleSubmit}>Send</button>
            </form>
      )}


      {error &&(
        <h4>Por favor verifique su información nuevamente</h4>
      )}
    </>
  );
};

export default Form;
