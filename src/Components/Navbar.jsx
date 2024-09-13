import React from 'react'
import { routes } from './utils/routes'
import { Link, useNavigate } from 'react-router-dom'
import { useDentistState } from '../Context/Context'
import CardStyles from '../Styles/Theme.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,dispatch} = useDentistState();

  const officialTheme= state.theme ? CardStyles.darkThemeNavbar : CardStyles.lightTheme 

  return (
    <nav className= {officialTheme}>
      <h1>DH ODONTO</h1>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contact</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button class="change-theme-btn" onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change theme</button>
    </nav>
  )
}

export default Navbar