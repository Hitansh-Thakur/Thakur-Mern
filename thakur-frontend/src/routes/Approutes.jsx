import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import NotFound from '../Components/NotFound'
const Approutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:pid" element={<Products/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
        
        </>
    )
}

export default Approutes