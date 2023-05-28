// service-worker.js

// Service worker installation event
self.addEventListener('install', event => {
    console.log('Service Worker installed');
  });
  
  // Service worker activation event
  self.addEventListener('activate', event => {
    console.log('Service Worker activated');
  });
  
  // Service worker fetch event
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });
  