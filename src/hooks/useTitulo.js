import { useEffect } from 'react';

export function useTitulo(titulo, descripcion = '') {
  useEffect(() => {
    document.title = titulo;

    if (descripcion) {
      let metaDescripcion = document.querySelector('meta[name="description"]');
      if (!metaDescripcion) {
        metaDescripcion = document.createElement('meta');
        metaDescripcion.setAttribute('name', 'description');
        document.head.appendChild(metaDescripcion);
      }
      metaDescripcion.setAttribute('content', descripcion);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href.split('#')[0]);
  }, [titulo, descripcion]);
}
