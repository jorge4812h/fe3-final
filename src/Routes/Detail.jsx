import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useDentistState } from '../Context/Context';
import CardStyles from '../Styles/Theme.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [show,setShow] = useState(true)
  const params=useParams()
  const [dentistas,setDentistas]=useState()
  const {state,dispatch} = useDentistState()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const officialTheme=state.theme ? CardStyles.darkTheme : CardStyles.lightTheme 
  
  const url=`https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    axios(url)
    .then((doc)=>{
      console.log(doc.data);
      setDentistas(doc.data)
      setTimeout(()=>{
        setShow(false)  
      },1000)
    })
    .catch(err => console.log(err))
  },[]);

  return (
    <>
    {show ? ("Loading...")
    : (
      <div className={officialTheme}>
        <h1>Detail Dentist {dentistas.id} </h1>
        <div className="detailCard">
          <div>
            <h4>Nombre</h4>
            <p>{dentistas.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{dentistas.email}</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>{dentistas.phone}</p>
          </div>
          <div>
            <h4>Website</h4>
            <p>{dentistas.website}</p>
          </div>
        </div>
      </div>
    )}  
    </>
  )
}
export default Detail