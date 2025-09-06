import React ,{ Fragment } from 'react'
import { useState } from 'react'
function App() {
  const [title, setTitle] = useState("my name is akash")

function updateTitle(){
  
    setTitle("My name is:" +Math.random() );
  }


  return (
    <Fragment>
      <button onClick = {updateTitle}>Update the title</button>
      <Header title= {title}></Header>
      <Header title= " akash"></Header>
    </Fragment>
  )
}

function Header({title}){
  console.log("rendered");
  
  return <div>
    {title}
  </div>
}

export default App
