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
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/SignUp" element={
              <>
                <div className="page-content">
                  <Signup />
                </div>
              </>
            } />
            <Route path="/Login" element={
              <>
                <div className="page-content">
                  <Login />
                </div>
              </>
            } />
            <Route path="/Kathak" element={
              <>
                <div className="page-content">
                  <KathakPage />
                </div>
              </>
            } />
            <Route path="/Bharatanatyam" element={
              <>
                <div className="page-content">
                  <BharatanatyamPage />
                </div>
              </>
            } />
            <Route path="/Odissi" element={
              <>
                <div className="page-content">
                  <OdissiPage />
                </div>
              </>
            } />
            <Route path="/Kuchipudi" element={
              <>
                <div className="page-content">
                  <KuchipudiPage />
                </div>
              </>
            } />
            <Route path="/Costume" element={
              <>
                <div className="page-content">
                  <Costume />
                </div>
              </>
            } />
            <Route path="/Theory" element={
              <>
                <div className="page-content">
                  <Theory />
                </div>
              </>
            } />
            <Route path="/Practical" element={
              <>
                <div className="page-content">
                  <Practical />
                </div>
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
