import { useCallback, useEffect, useRef, useState } from 'react';

export function useApi(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [vacio, setVacio] = useState(false);
  const controladorRef = useRef(null);

  const solicitar = useCallback(async () => {
    controladorRef.current?.abort();
    const controlador = new AbortController();
    controladorRef.current = controlador;

    setCargando(true);
    setError('');
    setVacio(false);

    try {
      const respuesta = await fetch(url, { signal: controlador.signal });

      if (!respuesta.ok) {
        throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
      }

      const resultado = await respuesta.json();

      if (!resultado || !resultado.current) {
        setDatos(null);
        setVacio(true);
        return;
      }

      setDatos(resultado);
    } catch (errorActual) {
      if (errorActual.name !== 'AbortError') {
        setError(errorActual.message || 'No pudimos consultar el servicio.');
      }
    } finally {
      if (!controlador.signal.aborted) {
        setCargando(false);
      }
    }
  }, [url]);

  useEffect(() => {
    solicitar();
    return () => controladorRef.current?.abort();
  }, [solicitar]);

  return { datos, cargando, error, vacio, reintentar: solicitar };
}
