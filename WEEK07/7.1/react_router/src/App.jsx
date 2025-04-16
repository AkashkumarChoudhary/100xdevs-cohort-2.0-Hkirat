import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css' 
import { lazy, Suspense } from 'react'
const Dashboard = lazy(() => import('./components/Dashboard'))
// import { Landing } from "./components/Landing"
const Landing = lazy(() => import('./components/Landing'))



function App() { 
  // Suspence API 
  return (
    <div>    
    <BrowserRouter>
        <Appbar/>
        <Routes>
            <Route path = "/dashboard" element = {<Suspense fallback = {"loading..."}><Dashboard /></Suspense> } />
           <Route path = "/" element = {<Suspense fallback = {"loading..."}><Landing/> </Suspense> }/>

        </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
    return <div>
      <div >
        <button onClick = {()=> {
          navigate('/')
        }}>Landing page
          </button>
          <button onClick = {()=> {
          navigate('/dashboard ')
        }}>Dashbaord
          </button>
      </div>
    </div>
}

export default App
