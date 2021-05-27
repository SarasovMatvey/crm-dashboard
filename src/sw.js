const CACHE_NAME = 'crm-tech-cache-v1';
const urlsToCache = [
  '/',
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
  console.log('Fetching');
  e.respondWith(caches.match(e.request));
});
