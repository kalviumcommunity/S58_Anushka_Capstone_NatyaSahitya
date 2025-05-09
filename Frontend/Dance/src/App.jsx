import './App.css'
import Costume from './Components/Kathak/Costume'
import FrontPage from './Components/FrontPage'
import Kathak from './Components/Kathak'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Theory from './Components/Kathak/Theory'
import Practical from './Components/Kathak/Practical'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import KathakPage from './Components/KathakPage'
import BharatanatyamPage from './Components/BharatanatyamPage'
import OdissiPage from './Components/OdissiPage'
import KuchipudiPage from './Components/KuchipudiPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/SignUp" element={
              <>
                <Navbar />
                <div className="page-content">
                  <Signup />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Login" element={
              <>
                <Navbar />
                <div className="page-content">
                  <Login />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Kathak" element={
              <>
                <Navbar />
                <div className="page-content">
                  <KathakPage />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Bharatanatyam" element={
              <>
                <Navbar />
                <div className="page-content">
                  <BharatanatyamPage />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Odissi" element={
              <>
                <Navbar />
                <div className="page-content">
                  <OdissiPage />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Kuchipudi" element={
              <>
                <Navbar />
                <div className="page-content">
                  <KuchipudiPage />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Costume" element={
              <>
                <Navbar />
                <div className="page-content">
                  <Costume />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Theory" element={
              <>
                <Navbar />
                <div className="page-content">
                  <Theory />
                </div>
                <Footer />
              </>
            } />
            <Route path="/Practical" element={
              <>
                <Navbar />
                <div className="page-content">
                  <Practical />
                </div>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
