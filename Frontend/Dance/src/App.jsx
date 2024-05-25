import './App.css'
import Front from './Components/FrontPage'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
        
      </Routes>
      
    </BrowserRouter>
      
    </>
  )
}

export default App
