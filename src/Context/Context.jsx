import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useContext, useReducer } from "react";
import { createContext, useEffect, useState } from "react";


const DentistState = createContext();

const lsFav=JSON.parse(localStorage.getItem("fav")) || [];

const initialState = {
  theme:false,
  fav:lsFav,
  dentistas:[],
}

const reducer=(state,action) =>{
  switch (action.type) {
    case "GET_DENTISTAS":
      return {...state, dentistas: action.payload}
    case "ADD_FAVORITOS":
      return {...state, fav:[...state.fav,action.payload]}
    case "CHANGE_THEME":
      return {...state, theme: !state.theme}
    case "REMOVE_FAVORITOS":
      const filteredfavs=state.fav.filter(
        (fav)=>fav.id !==action.payload.id);
      return {...state, fav: filteredfavs}
    default:
      throw new Error();
  }
}

const Context =({children}) =>{

    //const [theme,setTheme] = useState(false) // seteo de tema claro a oscuro
    //const [fav,setFav] = useState(lsFav) // Seteo de Dentistas favoritos 
    //const [dentistas,setDentistas] = useState([]);

    const [state,dispatch] = useReducer(reducer,initialState)
    console.log(state);

    const url="https://jsonplaceholder.typicode.com/users"  

    useEffect(()=>{
      axios(url)
      .then((doc)=>{
        //setDentistas(doc.data)
        dispatch({type:"GET_DENTISTAS",payload:doc.data})
      })
      .catch(err => console.log(err))
    },[]);

    useEffect(()=>{
      //nombreElemento, ValorElemento
      
      localStorage.setItem("fav",JSON.stringify(state.fav)) 
    },[state.fav])
    
    return(

        <DentistState.Provider value={{state,dispatch}}> 
            {children}
        </DentistState.Provider>
    )
}

export default Context

export const useDentistState=()=>{return useContext(DentistState)}