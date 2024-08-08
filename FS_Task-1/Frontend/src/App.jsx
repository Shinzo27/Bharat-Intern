import './App.css'
import Hero from './Components/Hero'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { Router ,BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Hero/>}/>
        </Routes>
      <Footer/>
        <ToastContainer position='top-center'/>
    </BrowserRouter>
    </>
  )
}

export default App
