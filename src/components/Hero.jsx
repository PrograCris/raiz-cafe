import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero__contenido">
        <span className="hero__etiqueta">Café de origen guatemalteco</span>
        <h1>Café que nace en casa</h1>
        <p>
          Granos de altura seleccionados en fincas guatemaltecas y tostados cada semana para llevarte una taza con historia.
        </p>
        <div className="hero__acciones">
          <Link className="boton" to="/contacto">Quiero conocer Raíz</Link>
          <a className="boton boton--borde" href="#productos-destacados">Ver favoritos</a>
        </div>
      </div>
    </header>
  );
}
