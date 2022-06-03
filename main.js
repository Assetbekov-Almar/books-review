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



