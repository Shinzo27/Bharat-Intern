import Header from './Components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './Pages/Hero'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <ToastContainer position='top-center'/> 
    </BrowserRouter>
  )
}

export default App
