self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('astro-cache').then(cache => {
        return cache.addAll([
          '/',
          '/catalog',
          '/login',
          '/register',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          if (event.request.method === 'GET') {
            const clonedResponse = fetchResponse.clone();
            caches.open('astro-cache').then(cache => cache.put(event.request, clonedResponse));
          }
          return fetchResponse;
        });
      })
    );
  });
  