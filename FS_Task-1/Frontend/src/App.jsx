import './App.css'
import Hero from './Components/Hero'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
    </BrowserRouter>
    </>
  )
}

export default App
