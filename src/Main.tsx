import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FirstPost from "./pages/posts/FirstPost";

function Main(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/FirstPost' element={<FirstPost />}></Route>
        </Routes>
    );
}
export default Main;