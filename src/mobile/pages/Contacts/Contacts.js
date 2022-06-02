import React, {useState} from 'react'
import styles from './Contacts.module.css'
import feedback from '../../../assets/images/Feedback.gif'
import { send } from 'emailjs-com'
import {failureNotify, successNotify} from "../../../infrastructure/utils/toastNotifications";
import LoaderWithBackground from "../../../common/components/LoaderWithBackground";

const Contacts = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Books Review',
        message: '',
        reply_to: '',
    })

    const [isEmptyError, setIsEmptyError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    };

    function displayNotification() {
      if (Notification.permission === 'granted') {
        // navigator.serviceWorker.getRegistration().then(function(reg) {
        const options = {
          body: 'Your message has been delivered successfully! Thank you for your contribution!',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };
        new Notification('Delivered!', options);
        // });
      }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const isEmpty = Object.values(toSend).some(x => x === '');
        if (isEmpty) {
            setIsEmptyError(true)
            return
        }
        setIsEmptyError(false)
        setIsLoading(true)

      send(
          'service_0c0t89b',
          'template_f1fo9tg',
          toSend,
          'user_fzMcAS4TUL53ER9r0bZex'
        )
          .then((response) => {
              if (response.status === 200) {
                  successNotify()
                  displayNotification()
                  window.scrollTo(0, 0)
                  setIsLoading(false)
                  setToSend({
                      from_name: '',
                      to_name: '',
                      message: '',
                      reply_to: '',
                  })
              } else {
                  failureNotify()
              }
          })
          .catch(() => {
              failureNotify()
          })
    }

    return (
      <div className="m-5">
        <div className="mb-16 group">
            <span className="relative">
              <span className="h-20 pt-2 text-4xl overflow-x-hidden whitespace-nowrap text-brand-accent text-blue-700">
                We care what you think!
              </span>
               <span className={`${styles.cursor} absolute -top-4 left-0 -top-1 inline-block h-10 bg-white w-full animate-type will-change`} />
            </span>
          <p className="text-2xl text-gray-500 mt-2 animate-appear opacity-0">Give us feedback, so that we know what we should improve to deliver a better experience.</p>
          <img src={feedback} alt='feedback'/>
        </div>

        <form className="w-full max-w-lg relative" onSubmit={onSubmit}>
          <LoaderWithBackground loading={isLoading} />
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="from-name">
                      From
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="from-name"
                    type='text'
                    name='from_name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="to-name">
                      To
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="to-last-name"
                    type='text'
                    name='to_name'
                    placeholder='Name'
                    value={toSend.to_name}
                    disabled={true}
                    onChange={handleChange}/>
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="email">
                      E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
              </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="password">
                      Message
                  </label>
                  <textarea
                      className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      name='message'
                      placeholder='Your message'
                      value={toSend.message}
                      onChange={handleChange}
                  />
              </div>
          </div>
          <div className="md:flex gap-y-2 flex-col md:items-center justify-center">
              {isEmptyError && <span className="text-red-600">Please make sure all fields are filled.</span>}
              <div>
                  <button
                    className="shadow  bg-black hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit">
                      Send
                  </button>
              </div>
              <div className="md:w-2/3"/>
          </div>
        </form>
      </div>
    )
}

export default Contacts