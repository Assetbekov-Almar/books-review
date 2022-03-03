initializeApp();

function initializeApp() {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    console.log("Service Worker and Push is supported");

    //Register the service worker
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(swReg => {
        console.log("Service Worker is registered", swReg);

      })
      .catch(error => {
        console.error("Service Worker Error", error);
      });
  } else {
    console.warn("Push messaging is not supported");
  }
}

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status)
})

function displayNotification() {
  if (Notification.permission === 'granted') {
    // navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: 'A new book has been added!',
        icon: './notification_logo.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },

        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: './contact.png'},
        ]
      };
      new Notification('Library update!', options);
    // });
  }
}

document.querySelector('.notificationButton').addEventListener('click', displayNotification)


