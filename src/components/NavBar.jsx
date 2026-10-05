import { Link, NavLink } from 'react-router-dom';
import { ENLACES } from '../datos.js';

export default function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <NavLink to="/" className="navbar__marca" aria-label="Raíz, volver al inicio">
        🌱 Raíz
      </NavLink>

      <ul className="navbar__links">
        {ENLACES.map((enlace) => (
          <li key={enlace.id}>
            <NavLink to={enlace.ruta} end={enlace.ruta === '/'} className={({ isActive }) => (isActive ? 'activo' : '')}>
              {enlace.texto}
            </NavLink>
          </li>
        ))}
        <li><Link to="/#beneficios">Beneficios</Link></li>
        <li><Link to="/#en-vivo">En vivo</Link></li>
        <li><Link className="navbar__cta" to="/contacto">Contactar</Link></li>
      </ul>
    </nav>
  );
}
