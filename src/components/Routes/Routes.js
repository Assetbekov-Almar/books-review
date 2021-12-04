import React, {useEffect, useState,  Suspense, lazy } from 'react'
import {Outlet, Route, Routes as Routing, useLocation, Navigate} from 'react-router-dom'
import Header from '../Header'
import {ToastContainer} from "react-toastify";
import Footer from "../Footer";
import LocalStorageService from "../../infrastructure/service/storage/LocalStorageService";
import {EMAIL} from "../../infrastructure/service/storage/config";

const Library = lazy(() => import('../../pages/Library/'))
const Bookshelf = lazy(() => import('../../pages/Bookshelf/'))
const Contacts = lazy(() => import('../../pages/Contacts/'))
const Auth = lazy(() => import('../../pages/Auth/'))

const Routes = () => {
  const location = useLocation()
  const [email, setState] = useState(LocalStorageService.getItem(EMAIL))

  useEffect(() => {
    setState(LocalStorageService.getItem(EMAIL))
  }, [location.pathname])

    return (
      <Suspense fallback={ <div>loading...</div> }>
        <Routing>
          {!email
            ? <>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='*' element={<Navigate to='/auth'/>}/>
              </>
            : <Route path='/' element={<Layout />}>
                <Route path='library' element={<Library />} />
                <Route path='bookshelf' element={<Bookshelf />} />
                <Route path='contacts' element={<Contacts />} />
              <Route path='*' element={<Navigate to='/'/>}/>
            </Route>
          }
        </Routing>
      </Suspense>
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
