import './App.css'
import Costume from './Components/Kathak/Costume'
import Front from './Components/FrontPage'
import Kathak from './Components/Kathak'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Theory from './Components/Kathak/Theory'
import Practical from './Components/Kathak/Practical'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
        <Route path="/Kathak" element={<Kathak/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Costume" element={<Costume/>}/>
        <Route path="/Theory" element={<Theory/>}/>
        <Route path="/Practical" element={<Practical/>}/>
      </Routes>
      
    </BrowserRouter>
      
    </>
  )
}

export default App
