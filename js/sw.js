const CACHE_NAME = 'crm-tech-cache-v1';
const urlsToCache = [
  '/crm-dashboard/',
  '/crm-dashboard/js/main.js',
  '/crm-dashboard/css/style.css',
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQUNIRV9OQU1FID0gJ2NybS10ZWNoLWNhY2hlLXYxJztcbmNvbnN0IHVybHNUb0NhY2hlID0gW1xuICAnL2NybS1kYXNoYm9hcmQvJyxcbiAgJy9jcm0tZGFzaGJvYXJkL2pzL21haW4uanMnLFxuICAnL2NybS1kYXNoYm9hcmQvY3NzL3N0eWxlLmNzcycsXG5dO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBlID0+IHtcbiAgY29uc29sZS5sb2coXCJJbnN0YWxsZWRcIik7XG4gIGUud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKENBQ0hFX05BTUUpXG4gICAgICAudGhlbihjYWNoZSA9PiB7XG5cdHJldHVybiBjYWNoZS5hZGRBbGwodXJsc1RvQ2FjaGUpO1xuICAgICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZSA9PiB7XG4gIGNvbnNvbGUubG9nKCdBY3RpdmF0ZWQnKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZSA9PiB7XG4gIGNvbnNvbGUubG9nKCdGZXRjaGluZycpO1xufSk7XG4iXSwiZmlsZSI6InN3LmpzIn0=
