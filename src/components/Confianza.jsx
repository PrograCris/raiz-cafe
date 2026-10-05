import { EQUIPO } from '../datos.js';

export default function Confianza() {
  return (
    <section id="confianza" className="seccion confianza">
      <div className="contenedor">
        <span className="seccion__eyebrow">Conoce a Raíz</span>
        <h2>Un café con personas detrás</h2>
        <p className="seccion__intro">
          Trabajamos cerca de quienes cultivan y tuestan para que cada bolsa conserve el origen y el trabajo que hay detrás.
        </p>
        <div className="rejilla">
          {EQUIPO.map((persona) => (
            <article className="miembro" key={persona.id}>
              <div className="miembro__avatar" aria-hidden="true">{persona.inicial}</div>
              <h3>{persona.nombre}</h3>
              <p>{persona.rol}</p>
            </article>
          ))}
        </div>
        <details className="faq">
          <summary>¿Cada cuánto tostamos nuestro café?</summary>
          <p>Tostamos cada semana para que recibas un café reciente y con sus características de origen bien conservadas.</p>
        </details>
      </div>
    </section>
  );
}
