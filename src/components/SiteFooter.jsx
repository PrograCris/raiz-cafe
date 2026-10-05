import { Link } from 'react-router-dom';

export default function SiteFooter() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__contenido">
        <div>
          <p className="footer__marca">🌱 Raíz</p>
          <p>Café de origen guatemalteco · Ciudad de Guatemala</p>
        </div>
        <div className="footer__enlaces">
          <a href="mailto:hola@raiz.gt">hola@raiz.gt</a>
          <a href="tel:+50255555555">+502 5555 5555</a>
          <Link to="/contacto">Contacto</Link>
          <Link to="/privacidad">Aviso de privacidad</Link>
        </div>
      </div>
      <p>© {anio} Raíz. Proyecto académico.</p>
    </footer>
  );
}
