export default function EstadoPeticion({ cargando, error, vacio, onReintentar }) {
  if (cargando) {
    return (
      <div className="api-estado api-estado--cargando" aria-live="polite">
        <span className="api-spinner" aria-hidden="true" />
        <p>Cargando información en vivo…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-estado api-estado--error" role="alert">
        <p><strong>No pudimos cargar la información.</strong></p>
        <p>{error}</p>
        <button className="boton boton--borde" type="button" onClick={onReintentar}>
          Reintentar
        </button>
      </div>
    );
  }

  if (vacio) {
    return (
      <div className="api-estado" role="status">
        <p><strong>No hay datos disponibles.</strong></p>
        <p>Prueba nuevamente en unos minutos.</p>
      </div>
    );
  }

  return null;
}
