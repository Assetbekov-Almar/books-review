let cacheName = "OpenGithubPWA";// 👈 any unique name

let filesToCache = [
    "/books-review/", // 👈 your repository name , both slash are important
    "service-worker.js",
    "js/install-handler.js",
    "manifest.json"
    // add your assets here
    // ❗️❕donot add config.json here ❗️❕
];

self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(cacheName).then((cache) => {
        console.log('installed successfully')
        return cache.addAll(filesToCache);
    }));
});

self.addEventListener('fetch', function (event) {

    if (event.request.url.includes('clean-cache')) {
        caches.delete(cacheName);
        console.log('Cache cleared')
    }

    event.respondWith(caches.match(event.request).then(function (response) {
          if (response) {
              console.log('served form cache')
          } else {
              console.log('Not serving from cache ', event.request.url)
          }
          return response || fetch(event.request);
      })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
      caches.keys().then(function (keyList) {
          return Promise.all(keyList.map(function (key) {
              if (key !== cacheName) {
                  console.log('service worker: Removing old cache', key);
                  return caches.delete(key);
              }
          }));
      })
    );
    return self.clients.claim();
});

self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  const options = {
    body: body,
    icon: './notification_logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 2
    },
    // actions: [
    //   {action: 'explore', title: 'Explore this new world',
    //     icon: 'images/checkmark.png'},
    //   {action: 'close', title: 'Close',
    //     icon: 'images/xmark.png'},
    // ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});