<script>
// Bloquea clic derecho
document.addEventListener('contextmenu', e => e.preventDefault());

// Bloquea teclas comunes de inspección (Ctrl+Shift+I, Ctrl+U, F12, etc.)
document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
    return false;
  }
  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault();
    return false;
  }
  // Ctrl+U
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    return false;
  }
  // Ctrl+C
  if (e.ctrlKey && e.key === 'c') {
    e.preventDefault();
    return false;
  }
});

// Detecta si abren DevTools (inspección)
setInterval(function () {
  const before = new Date();
  debugger;
  const after = new Date();
  if (after - before > 100) {
    document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:50px;">👀 ¡Inspector detectado! Cerrando contenido...</h1>';
  }
}, 1000);
</script>
