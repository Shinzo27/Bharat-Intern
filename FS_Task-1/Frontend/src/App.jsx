import './App.css'
import Hero from './Components/Hero'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      <Hero/>
    </>
  )
}

export default App
