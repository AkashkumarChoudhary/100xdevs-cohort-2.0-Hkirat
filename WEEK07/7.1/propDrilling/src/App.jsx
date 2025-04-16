
import { useState } from 'react'
import './App.css'

function App() {
  const [count, useCount] = useState(0);

  return (
    <div>
        <Count/>
        <Buttons/>
        
    </div>
  )
}


function Count(){
 return <div>
  <Count></Count>
 </div>
}
function Buttons(){
  return <div>
  <button onClick = {()=> {
    useCount(count = count+1)
  }} >
    Increment
  </button>
  <button onClick = {()=> {
    useCount(count = count-1)
  }} >
    Decrement
  </button>
 </div>
}
export default App
