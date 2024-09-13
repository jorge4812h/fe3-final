import React from 'react'
import Form from '../Components/Form'
import CardStyles from '../Styles/Theme.module.css'
import { useDentistState } from '../Context/Context'
import CardContactStyles from '../Styles/Contact.module.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state}=useDentistState()
  
  const officialTheme=state.theme ? CardStyles.darkTheme : CardStyles.lightTheme 

  return (
    
    <div className={`${CardContactStyles.contactDiv} ${officialTheme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact