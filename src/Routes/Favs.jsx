import React from "react";
import Card from "../Components/Card";
import { useDentistState } from "../Context/Context";
import CardStyles from '../Styles/Theme.module.css'
import CardGridStyles from '../Styles/Card.module.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useDentistState();
  
  
  const officialTheme=state.theme ? CardStyles.darkTheme : CardStyles.lightTheme 


  return (
    <div className={officialTheme}>
      <h1>Dentists Favs</h1>
      <div className={CardGridStyles.cardGrid}>
          {/* este componente debe consumir los destacados del localStorage */}
          {state.fav.map((dentista)=>(
            <Card key={dentista.id} dentista={dentista}/>
          ))}
          {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
