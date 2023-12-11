// Importa el módulo de servicio de red
const { fetch } = require('serviceworker-rs');

// Define una función que se llama cuando se recibe una solicitud de red
async function handleRequest(request) {
  // Verifica si la solicitud es para un recurso que se puede almacenar en caché
  if (request.url.includes('.html')) {
    // Almacena el recurso en caché
    const response = await fetch(request);
    await caches.open('my-app-cache').then(cache => cache.put(request.url, response));

    // Devuelve el recurso almacenado en caché
    return caches.match(request.url);
  } else {
    // Devuelve la respuesta original
    return await fetch(request);
  }
}

// Registra el manejador de solicitudes
addEventListener('fetch', handleRequest);
