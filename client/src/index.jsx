import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Pokedex from "./components/Pokedex.jsx";
import Pokedetails from "./components/Pokedetails.jsx";


const App = () => {
  const [view, setView] = useState("pokedex");
  const [data, setdata] = useState([]);
  const [theWontedDta, settheWontedDta] = useState([]);
  const [rerender, setrerender] = useState(false);
  const [inputs, setinputs] = useState(false)
  let name = "";
  let img = "";
  let type = "";
  let number = 0;
  let search = "";
  const changeView = (option) => {
    setView(option);
  };
  const renderView = () => {
    if (view === "pokedex") {
      return (
        <Pokedex
          settheWontedDta={settheWontedDta}
          setView={setView}
          data={data}
          setrerender={setrerender}
          rerender={rerender}
          setinputs={setinputs}

        />
      );
    } else {
      return (
        <Pokedetails
          setrerender={setrerender}
          rerender={rerender}
          theWontedDta={theWontedDta}
        />
      );
    }
  };
  useEffect(() => {
    axios.get("http://localhost:3000/getAll").then((res) => {
      setdata(res.data);
    });
  }, [rerender]);
  return (
    <div>
      <div className="nav">
        <span className="logo" onClick={() => {changeView("pokedex")
      setinputs(false)}
      }>
          PokeMongoDB
        </span>
        <span
          className={view === "pokedex" ? "nav-selected" : "nav-unselected"}
          onClick={() => changeView("pokedex")}
        >
          See all Pokemons
        </span>
      </div>
      {!inputs && <>
      <h1>add the pokemon that you wish for</h1>
      <div className="adda">
      
      name:
      <input
        type="text"
        onChange={(e) => {
          name = e.target.value;
        }}
      />
      number:
      <input
        type="text"
        onChange={(e) => {
          number = parseInt(e.target.value);
        }}
      />
      types:
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          type = e.target.value;
        }}
      />
      images :
      <input
        type="text"
        onChange={(e) => {
          img = e.target.value;
        }}
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3000/addOne", {
              name: name,
              imageUrl: img,
              number: number,
              types: [type],
            })
            .then((res) => {
              setrerender(!rerender);
            });
        }}
      >
        add it
      </button>
      </div>

      <h1>search by there types : </h1>
      <div className="sear">
      <input
        type="text"
        onChange={(e) => {
          search = e.target.value;
        }}
      />
      <button
        onClick={() => {
          let hackdata = [];
          hackdata = data.filter((e, i) => {
            return (e.types).includes(search) ;
          });
          setdata(hackdata);
        }}
      >
        search
      </button>
      </div>
      </>}
      <div className="main">{renderView()}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("pokemongodb"));
