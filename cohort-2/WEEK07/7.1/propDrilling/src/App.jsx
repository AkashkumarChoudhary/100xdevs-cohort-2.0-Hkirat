import {useState} from "react";
import { CountContext } from "./context";

function App(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value ={count}>
      <Count  setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}


function Count({setCount}){
  return <div>
    <CounterRender/>
    <Buttons  setcount ={setCount}/>
  </div>
}

function CounterRender(){
  const count = useContext(CountContext) ;
  return <div>
    {count}
  </div>
}

function Buttons ({ setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick ={()=>{
      setCount(count +1)
    }}> Increase</button>
    <button onClick =   { ()=>{
      setCount (count -1)
    }}>Decrease</button>
  </div>
}