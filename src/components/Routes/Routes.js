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
      </Suspense>
    )
}

function Layout() {
  const [isInitialMount, setIsInitialMount] = React.useState(true);

  React.useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
    } else {
      const divInstall = document.getElementById('installContainer');
      const butInstall = document.getElementById('butInstall');
      const installPromotion = document.querySelector('.install-promotion');

      /* Put code here */
      window.addEventListener('beforeinstallprompt', (event) => {
        console.log('👍', 'beforeinstallprompt', event);

        event.preventDefault();
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;

        installPromotion.style.display = 'block';

        // Remove the 'hidden' class from the install button container
        divInstall.classList.toggle('hidden', false);
      });

      butInstall.addEventListener('click', async () => {
        console.log('👍', 'butInstall-clicked');

        installPromotion.style.display = 'none';

        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle('hidden', true);
      });

      window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
        installPromotion.style.display = 'none';
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

  /**
   * Warn the page must be served over HTTPS
   * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
   * Installability requires a service worker with a fetch event handler, and
   * if the page isn't served over HTTPS, the service worker won't load.
   */
  const handleInstallBtnClick = async () => {
    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    window.deferredPrompt = null;
  };

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
                <h2 className="install-promotion">You can install PWA now.</h2>
                <p id="requireHTTPS" className="hidden">
                  <b>STOP!</b> This page <b>must</b> be served over HTTPS. Please <a>reload this page via HTTPS</a>.
                </p>
                <div id="installContainer" className="hidden">
                  <button id="butInstall" type="button" onClick={() => handleInstallBtnClick}>
                    Install
                  </button>
                </div>
              </header>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Routes
