import React from 'react'
import { Outlet, Route, Routes as Routing } from 'react-router-dom'
import Contacts from '../../pages/Contacts'
import Header from '../Header'
import Auth from "../../pages/Auth";
import Library from "../../pages/Library";
import Bookshelf from "../../pages/Bookshelf";
import {ToastContainer} from "react-toastify";
import Footer from "../Footer";

const Routes = () => {
    return (
        <Routing>
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<Layout />}>
                <Route path='library' element={<Library />} />
                <Route path='bookshelf' element={<Bookshelf />} />
                <Route path='contacts' element={<Contacts />} />
            </Route>
        </Routing>
    )
}

function Layout() {
    return (
        <div>
          <ToastContainer />
            <Header />
            <div className='content w-1200 m-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Routes
