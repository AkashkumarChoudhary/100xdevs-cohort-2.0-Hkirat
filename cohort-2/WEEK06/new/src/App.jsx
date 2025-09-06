import React,{useState} from "React";

function App(){
  const [todos, setTodos] = useState([{
    id:1,
    title:"go to gym",
    description: "go to gym today"
  },{
    id:2,
    title:"eat food",
    description:"eat food today"
  },{
    id:3,
    title:"go to class",
    description:"go to class"
  }])

function addTodo(){
  setTodos([...todos,{
    id:4,
    title:Math.random(),
    description:Math.random()
  }])
}

return (
  <div>
    <button onClick ={addTodo}>Add a todo</button>
    {todos.map(todo => <Todo title ={todo.title} description ={todo.description}/>)}
  </div>
)

}

function Todo({title, description}){
  return(
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {description}
      </p>
    </div>
  )
export default App;
















// import React,{ useState  } from 'react'


// function App() {

// const [title, setTitle] = useState("my name is akash");
// function updateTitle(){
//   setTitle("my name is " + Math.random() );
// }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header> 
//       <Header title = "harkirat2"></Header>

//     </div>
//   )
// }
// // function HeaderWithButton(){

// //   const [title, setTitle] = useState("my name is akash")
// // function updateTitle(){
// //     setTitle("my name is " + Math.random())
// // }
// //   return <div>
// //       <button onClick ={updateTitle}>Update the title</button>
// //       <Header title={title}></Header>
// //   </div>
// // }

// // eslint-disable-next-line no-undef
// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// })



// export default App
