import React from "react";
import EachPoki from "./EachPoki.jsx";
import Pokedetails from "./Pokedetails.jsx";

const Pokedex = ({
  data,
  setView,
  settheWontedDta,
  setrerender,
  rerender,
  setinputs,
}) => (
  <div>
    <ul className="pokemon-list">
      {data.map((e, i) => (
        <EachPoki
          setrerender={setrerender}
          rerender={rerender}
          settheWontedDta={settheWontedDta}
          setView={setView}
          el={e}
          key={i}
          setinputs={setinputs}
        />
      ))}
    </ul>
  </div>
);

export default Pokedex;
