import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useDentistState } from '../Context/Context'
import CardStyles from '../Styles/Theme.module.css'
import CardGridStyles from '../Styles/Card.module.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useDentistState() // retornamos los elementos del contexto trayendo unicamente dentistas.

  const officialTheme=state.theme ? CardStyles.darkTheme : CardStyles.lightTheme 

  return (
    <>
    <main className={officialTheme} >
      <h1>Home</h1>
      <div className={CardGridStyles.cardGrid}>
        {state.dentistas.map((dentista)=>(
          <Card key={dentista.id} dentista={dentista}/>
        ))}
      </div>
    </main>
    </>
  )
}

export default Home