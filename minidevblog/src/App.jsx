import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AutoProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAutentication } from './hooks/userAuthentication'




import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"


function App(){
  const [user, setUser ] = useState(undefined)
  const { auth } = userAutentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <p>Loading...</p>
  }


  return(
    <>
    <AutoProvider value={{ user }}>
      <BrowserRouter>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={ <Register /> }></Route>
        <Route path='/login' element={<Login />}></Route>
        </Routes> 
      </div>
      <Footer />
      </BrowserRouter>
    </AutoProvider>
    </>
  )
}

export default App
