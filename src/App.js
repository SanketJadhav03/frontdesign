import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import AddBooks from './books/AddBooks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import EditBooks from './books/EditBooks'
import EditAuthor from './books/EditAuthor'

const App = () => {
  return (
    <div>

    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/:bookTitle' element={<Home/>}/>
        <Route exact path="/addBook" element={<AddBooks/>}/>
        <Route exact path="/editBook/:id" element={<EditBooks/>}/>
        <Route exact path="/editAuthor/:id" element={<EditAuthor/>}/>
      </Routes>
    </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
