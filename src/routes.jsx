import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import ProductPage from './pages/product'
import SingleProduct from './pages/single-product'

const RouterCall = () => {
  return (
    <Routes>
         <Route path="/" exact element={<HomePage />} />
         
         <Route path="/product"  element={<ProductPage />} />
           <Route path="/product/:id" element={<SingleProduct />} />

         <Route path="/about"  element={"About"} />
       
    </Routes>
  )
}

export default RouterCall
