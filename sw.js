const CACHE_NAME = 'checkin-generator-v2';

// Only precache URLs the page requests as-is. The versioned assets
// (styles.css?v=2, script.js?v=2) are handled by runtime caching so their
// cache keys match the real request URLs (query string included).
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    // Let the browser handle non-GET and cross-origin requests
    // (Google Fonts, Umami analytics, etc.) with its default behaviour.
    if (request.method !== 'GET' || url.origin !== self.location.origin) {
        return;
    }

    const isNavigation =
        request.mode === 'navigate' ||
        (request.headers.get('accept') || '').includes('text/html');

    if (isNavigation) {
        // Network-first: returning online visitors always get fresh HTML,
        // and the cache is refreshed on every successful load.
        event.respondWith(
            fetch(request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                    return response;
                })
                .catch(() =>
                    caches.match(request).then(cached =>
                        cached ||
                        caches.match('/index.html').then(idx => idx || caches.match('/'))
                    )
                )
        );
        return;
    }

    // Other same-origin GETs (CSS/JS/manifest): stale-while-revalidate.
    // Serve cached immediately when available, while refreshing in the
    // background. First online load caches styles.css?v=2 / script.js?v=2
    // under their real URLs so they work offline afterwards.
    event.respondWith(
        caches.match(request).then(cached => {
            const networkFetch = fetch(request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                    return response;
                })
                .catch(() => cached);
            return cached || networkFetch;
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});
