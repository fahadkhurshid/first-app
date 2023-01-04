import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./nav";
import About from "./about";
import Index from "./index";


const Home = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
            <Route path="/index" element={<Index />}>
                
            </Route>
            <Route path="/about" element={<About />}>
                
            </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Home