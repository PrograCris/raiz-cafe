import { useTitulo } from '../hooks/useTitulo.js';

export default function Privacidad() {
  useTitulo(
    'Raíz | Aviso de privacidad',
    'Aviso de privacidad de Raíz y tratamiento de los datos enviados mediante el formulario de contacto.'
  );

  return (
    <article className="contenedor seccion texto-largo">
      <h1>Aviso de privacidad</h1>
      <p>Este sitio es un proyecto académico. Los datos que escribas en el formulario se utilizan únicamente para simular la atención de una consulta y no se envían a un servicio externo.</p>
      <h2>Datos de contacto</h2>
      <p>El nombre, correo, motivo y mensaje se muestran localmente para demostrar el flujo de validación y confirmación solicitado en el proyecto.</p>
      <h2>Analítica</h2>
      <p>Si se habilita Google Analytics 4 para la evaluación, se utilizará para medir visitas y la acción principal de la landing de acuerdo con la configuración del proyecto.</p>
    </article>
  );
}
