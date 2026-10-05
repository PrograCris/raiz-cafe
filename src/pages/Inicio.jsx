import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import SeccionAPI from '../components/SeccionAPI.jsx';
import Confianza from '../components/Confianza.jsx';
import TarjetaProducto from '../components/TarjetaProducto.jsx';
import { PRODUCTOS, BENEFICIOS } from '../datos.js';
import { useTitulo } from '../hooks/useTitulo.js';

export default function Inicio() {
  useTitulo(
    'Raíz | Café de origen guatemalteco',
    'Descubre café guatemalteco de origen, tostado artesanalmente cada semana. Conoce nuestros cafés y contacta a Raíz.'
  );

  const destacados = PRODUCTOS.filter((producto) => producto.destacado);

  return (
    <>
      <Hero />

      <section id="beneficios" className="contenedor seccion">
        <span className="seccion__eyebrow">Nuestra propuesta</span>
        <h2>Una taza con origen, frescura y propósito</h2>
        <p className="seccion__intro">Seleccionamos cafés guatemaltecos y trabajamos cerca de quienes los producen para cuidar cada etapa hasta tu taza.</p>
        <div className="rejilla">
          {BENEFICIOS.map((beneficio) => (
            <article key={beneficio.id} className="beneficio">
              <span className="beneficio__icono" aria-hidden="true">{beneficio.icono}</span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="productos-destacados" className="contenedor seccion">
        <span className="seccion__eyebrow">Lo que ofrecemos</span>
        <h2>Nuestros favoritos</h2>
        <p className="seccion__intro">Dos cafés para empezar a conocer el sabor de Raíz.</p>
        <div className="rejilla">
          {destacados.map((producto) => <TarjetaProducto key={producto.id} producto={producto} />)}
        </div>
        <Link className="boton boton--borde landing-link" to="/productos">Explorar todo el catálogo</Link>
      </section>

      <SeccionAPI />
      <Confianza />

      <section id="contacto-cta" className="cta-final">
        <div className="contenedor">
          <span className="seccion__eyebrow">Da el siguiente paso</span>
          <h2>¿Quieres probar un café con historia?</h2>
          <p>Cuéntanos qué estás buscando y te ayudamos a encontrar una opción de Raíz.</p>
          <Link className="boton boton--acento" to="/contacto">Quiero conocer Raíz</Link>
        </div>
      </section>
    </>
  );
}
