export default function TarjetaDato({ temperatura, descripcion, humedad, viento }) {
  return (
    <article className="api-dato">
      <div>
        <span className="api-dato__etiqueta">Guatemala · En vivo</span>
        <h3>Condiciones actuales</h3>
        <p className="api-dato__temperatura">{Math.round(temperatura)}°C</p>
        <p>{descripcion}</p>
      </div>
      <dl className="api-dato__detalles">
        <div><dt>Humedad</dt><dd>{humedad}%</dd></div>
        <div><dt>Viento</dt><dd>{viento} km/h</dd></div>
      </dl>
    </article>
  );
}
