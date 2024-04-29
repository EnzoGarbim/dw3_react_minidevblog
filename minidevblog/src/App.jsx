import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";

import { AutoProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAutentication } from './hooks/userAutentication'


function App(){
  const [user, setUser ] = useState(undefined)
  const { auth } = userAutentication()

  return(
    <>
    <AutoProvider value={{ user }}>
      <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/register' element={ <Register /> }></Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/post/create' element={<CreatePost/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes> 
      </div>
      <Footer />
      </BrowserRouter>
    </AutoProvider>
    </>
  )
}

export default App
