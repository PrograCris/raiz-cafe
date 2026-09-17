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
  }, [titulo, descripcion]);
}
