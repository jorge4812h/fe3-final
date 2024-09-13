import React from "react";
import { Link } from "react-router-dom";
import { useDentistState } from "../Context/Context";

const Card = ({dentista}) => {
  const {state,dispatch} = useDentistState();
  const isFav=state.fav.find((fav)=>fav.id ===dentista.id)
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    //dispatch({type: isFav ? "REMOVE_FAVORITOS" :"ADD_FAVORITOS",payload:dentista})
    if (isFav) {
      dispatch({type:"REMOVE_FAVORITOS",payload:dentista})
    } else{
      dispatch({type:"ADD_FAVORITOS",payload:dentista})
    }

  }
  
  return (
      <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}
          <img src="/images/doctor.jpg" alt="" />
          <Link to={"/detail/"+dentista.id}>
            <h4>{dentista.name}</h4>
          </Link>
          <p>{dentista.username}</p>
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">{isFav?"👍":"⭐"}</button>
      </div>
  );
};

export default Card;
