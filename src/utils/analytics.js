export function registrarEvento(nombre, parametros = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', nombre, parametros);
  }
}
