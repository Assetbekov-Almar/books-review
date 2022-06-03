import React, {useEffect, useState} from 'react'
import {Outlet, Route, Routes as Routing, useLocation, Navigate} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import Footer from "../Footer";
import LocalStorageService from "../../../infrastructure/service/storage/LocalStorageService";
import {EMAIL} from "../../../infrastructure/service/storage/config";
import Header from "../Header";
import Library from "../../pages/Library"
import Bookshelf from "../../pages/Bookshelf"
import Contacts from '../../pages/Contacts'
import Auth from '../../pages/Auth'

const Routes = () => {
  const location = useLocation()
  const [email, setState] = useState(LocalStorageService.getItem(EMAIL))

  useEffect(() => {
    setState(LocalStorageService.getItem(EMAIL))
  }, [location.pathname])

    return (
      <Routing>
        {!email
          ? <>
              <Route path='/books-review//auth' element={<Auth/>}/>
              <Route path='*' element={<Navigate to='/books-review//auth'/>}/>
            </>
          : <Route path='/books-review' element={<Layout />}>
              <Route path='library' element={<Library />} />
              <Route path='bookshelf' element={<Bookshelf />} />
              <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to='/books-review/'/>}/>
          </Route>
        }
      </Routing>
    )
}

function Layout() {
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {

      /* Put code here */
      window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);

        event.preventDefault();
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
      });

      window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
        // Clear the deferredPrompt so it can be garbage collected
        window.deferredPrompt = null;
      });

      if (window.location.protocol === 'http:') {
        const requireHTTPS = document.getElementById('requireHTTPS');
        const link = requireHTTPS.querySelector('a');
        link.href = window.location.href.replace('http://', 'https://');
        requireHTTPS.classList.remove('hidden');
      }
    }
  });



  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/books-review/service-worker.js');
  }

  window.addEventListener('appinstalled', () => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
  });
    return (
        <div>
          <ToastContainer />
            <Header />
            <div className='content w-1200 m-auto'>
              <header className="App-header">
                <p id="requireHTTPS" className="hidden">
                  <b>STOP!</b> This page <b>must</b> be served over HTTPS. Please <a>reload this page via HTTPS</a>.
                </p>
              </header>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Routes
