const CACHE_NAME = 'crm-tech-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/auth.html',
  '/files.html',
  '/history.html',
  '/payments.html',
  '/js/main.js',
  '/css/style.css',
];

self.addEventListener('install', e => {
  console.log("Installed");
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
	      return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', e => {
  console.log('Activated');
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});

self.addEventListener('push', function(event) {
  let notificationData = {};
  
  try {
    notificationData = event.data.json();
  } catch (e) {
    // TODO
    notificationData = {
      title: 'Default title',
      body: 'Default message',
      icon: '/default-icon.png'
    };
  }
  
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon
    })
  );
});