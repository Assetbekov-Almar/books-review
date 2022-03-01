Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status)
})

function displayNotification() {
  console.log('asd')
  if (Notification.permission === 'granted') {
    console.log('asd')
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Hello world!')
    });
  }
}

console.log(document.querySelector('.notificationButton'))

document.querySelector('.notificationButton').addEventListener('click', displayNotification)