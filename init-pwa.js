// Este script conecta tu Blogger con tu Service Worker y tu Manifest de GitHub
(function () {
  // Añadir el manifest al head
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = 'https://imperiodecorativo.github.io/imperio-decorativo/manifest.json';
  document.head.appendChild(link);

  // Registrar el Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('https://imperiodecorativo.github.io/imperio-decorativo/service-worker.js')
        .then(reg => console.log('✅ Service Worker registrado:', reg))
        .catch(err => console.error('❌ Error registrando Service Worker:', err));
    });
  }
})();
