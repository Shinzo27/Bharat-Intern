import React, { useContext } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate } from 'react-router-dom'

const Hero = () => {
  const {isAuthenticated} = useContext(Context)
  const navigateTo = useNavigate()

  if(!isAuthenticated) return <Navigate to={'/login'}/>

  return (
    <>
      Hello World
    </>
  )
}

export default Hero