import React ,{useState}from 'react';
import axios from "axios"
const Pokedetails = ({theWontedDta,rerender,setrerender}) => {
  const [show, setshow] = useState(false)
  let number=""
  let type=''
 return <div className='pokidit'><h1>Pokemon details:</h1>

 { !show && <><img src={theWontedDta.imageUrl} alt="" srcset=""  className='imag'/>
   <h1>Name: {theWontedDta.name}</h1>
   <h2>Number :{theWontedDta.number}</h2>
   <h2>Types: {theWontedDta.types.map((e,i)=>{
    return <li>{e}</li>
   })}</h2>
   <button  onClick={()=>{
    setshow(!show)
   }}>edit </button></>}
   {show && <>
   <h1>Edit here </h1>
      number: <input type="text" onChange={(e)=>{
        number=parseInt(e.target.value)
      }}/>
      types: <input type="text" name="" id="" onChange={(e)=>{
        type=e.target.value
      }}/>
      <button onClick={()=>{
        axios.put(`http://localhost:3000/upadateOne/${theWontedDta.name}`,{
          number:number,
          types:[type]
        }).then((res)=>{
          setrerender(!rerender)
          setshow(!show)
        })
      }}>modify</button>
   </>}
  </div>
}

export default Pokedetails;
