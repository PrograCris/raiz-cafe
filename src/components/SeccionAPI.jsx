import { useApi } from '../hooks/useApi.js';
import EstadoPeticion from './EstadoPeticion.jsx';
import TarjetaDato from './TarjetaDato.jsx';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=14.6349&longitude=-90.5069&current=temperature_2m,relative_humidity_2m,wind_speed_10m&wind_speed_unit=kmh&timezone=America%2FGuatemala';

export default function SeccionAPI() {
  const { datos, cargando, error, vacio, reintentar } = useApi(API_URL);
  const actual = datos?.current;

  return (
    <section id="en-vivo" className="seccion api-seccion" aria-labelledby="api-titulo">
      <div className="contenedor">
        <span className="seccion__eyebrow">Dato en vivo</span>
        <h2 id="api-titulo">El café se disfruta mejor cuando sabes cómo está el día</h2>
        <p className="seccion__intro">
          Consulta las condiciones actuales de Ciudad de Guatemala directamente desde una API meteorológica pública.
        </p>

        <EstadoPeticion cargando={cargando} error={error} vacio={vacio} onReintentar={reintentar} />

        {!cargando && !error && !vacio && actual && (
          <TarjetaDato
            temperatura={actual.temperature_2m}
            humedad={actual.relative_humidity_2m}
            viento={actual.wind_speed_10m}
            descripcion="Condiciones actuales en Ciudad de Guatemala."
          />
        )}
      </div>
    </section>
  );
}
