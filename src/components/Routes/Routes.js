import React from 'react'
import { Outlet, Route, Routes as Routing } from 'react-router-dom'
import About from '../../pages/About'
import Header from '../Header'
import Auth from "../../pages/Auth";
import Library from "../../pages/Library";
import Bookshelf from "../../pages/Bookshelf";

const Routes = () => {
    return (
        <Routing>
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<Layout />}>
                <Route path='library' element={<Library />} />
                <Route path='bookshelf' element={<Bookshelf />} />
                <Route path='about' element={<About />} />
            </Route>
        </Routing>
    )
}

function Layout() {
    return (
        <div>
            <Header />
            <div className='content w-1200 m-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Routes
