import axios from "axios";
import React, { useState } from "react";
function EachPoki({
  el,
  settheWontedDta,
  setView,
  setrerender,
  rerender,
  setinputs,
}) {
  return (
    <div>
      <li
        className="pokemon-list-item"
        onClick={() => {
          settheWontedDta(el);
          setView("Pokedetails");
          setinputs(true)
        }}
      >
        <img className="eachImg" src={el.imageUrl} alt="" srcset="" />
        <h2>{el.name}</h2>
      </li>
      <button className="delete"
        onClick={() => {
          axios
            .delete(`http://localhost:3000/deleteOne/${el.name}`)
            .then((res) => {
              setrerender(!rerender);
            });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default EachPoki;
