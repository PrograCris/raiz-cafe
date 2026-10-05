# AAT1-RA2 · Desarrollo del Frontend

## 1. Descripción del proyecto y acción principal

**Proyecto:** Raíz, café de origen guatemalteco.

La página principal fue transformada en una landing page orientada a una única acción: **que la persona interesada contacte a Raíz para conocer el café y realizar una consulta o pedido**.

La acción principal aparece en el Hero y vuelve a aparecer al cierre de la landing. Las páginas `/productos`, `/productos/:id`, `/nosotros` y `/contacto` se conservan para mantener el routing de la actividad anterior.

## 2. Requerimientos

| ID | Requerimiento | Comprobación |
|---|---|---|
| RF-01 | Inicio funciona como landing con una acción principal | El Hero comunica la acción y el CTA se repite al cierre |
| RF-02 | CTA principal aparece al menos dos veces | Hero y CTA final |
| RF-03 | Existe una sección alimentada por una API externa | DevTools > Network muestra la petición a Open-Meteo |
| RF-04 | API resuelve cargando, error, vacío y éxito | Sección `SeccionAPI` + `EstadoPeticion` |
| RF-05 | Navegación SPA y enlace activo | React Router + NavLink |
| RF-06 | Formulario valida y confirma datos | Ruta `/contacto` |
| RF-07 | Cada ruta tiene título y descripción | Hook `useTitulo` |
| RF-08 | Sitio publicado con HTTPS | GitHub Pages |
| RF-09 | Acción principal preparada para medición GA4 | Helper `registrarEvento` |
| RNF-01 | Responsive desde 320 px | CSS con media queries |
| RNF-02 | Variables CSS centralizadas | `:root` en `styles.css` |
| RNF-03 | Fallo de API no rompe el resto | Error aislado dentro de `SeccionAPI` |
| RNF-04 | No existen claves secretas en frontend | Open-Meteo se consume sin API key |
| RF-10 | Menú incluye acceso rápido a secciones de landing | Anclas Beneficios y En vivo |
| RF-11 | La landing comunica origen y frescura del producto | Beneficios + catálogo |
| RF-12 | Existe información de privacidad | Ruta `/privacidad` y enlace en footer |

### Boceto

```text
┌─────────────────────────────────────────────┐
│ Logo   Inicio Productos Nosotros Contactar  │
├─────────────────────────────────────────────┤
│                 HERO                        │
│        Café que nace en casa                │
│        [ Quiero conocer Raíz ]              │
├─────────────────────────────────────────────┤
│             PROPUESTA DE VALOR              │
│      [Origen] [Tueste] [Precio justo]       │
├─────────────────────────────────────────────┤
│             PRODUCTOS                       │
│       [Card] [Card] [Ver catálogo]          │
├─────────────────────────────────────────────┤
│             API EN VIVO                     │
│       clima actual de Guatemala             │
├─────────────────────────────────────────────┤
│              CONFIANZA                      │
│       equipo + pregunta frecuente           │
├─────────────────────────────────────────────┤
│             CTA FINAL                       │
│        [ Quiero conocer Raíz ]              │
├─────────────────────────────────────────────┤
│             FOOTER                          │
└─────────────────────────────────────────────┘
```

## 3. Tecnologías y decisiones

- **React + Vite:** mantiene el proyecto de la Actividad 1 y permite dividir la interfaz en componentes reutilizables.
- **React Router:** mantiene navegación SPA, rutas de producto con parámetro y evita recargas completas.
- **fetch nativo:** la integración requiere una petición GET pública y no necesita interceptores ni una dependencia adicional.
- **Estado local + hook `useApi`:** suficiente para una sola integración externa y mantiene la lógica de datos separada de la presentación.
- **CSS con variables:** permite centralizar la identidad visual y modificar la paleta desde `:root`.
- **GitHub Pages:** permite publicar el proyecto con HTTPS y automatizar el despliegue mediante GitHub Actions.

## 4. Componentes

1. `NavBar.jsx` — navegación y enlaces activos.
2. `SiteFooter.jsx` — cierre, contacto y privacidad.
3. `Hero.jsx` — titular, propuesta breve y CTA principal.
4. `TarjetaProducto.jsx` — muestra un producto y recibe `producto` por props.
5. `SeccionAPI.jsx` — solicita datos y decide qué estado presentar.
6. `EstadoPeticion.jsx` — representa cargando, error y vacío.
7. `TarjetaDato.jsx` — dibuja los datos recibidos de la API.
8. `Confianza.jsx` — equipo y FAQ.
9. `Formulario` — formulario existente en `Contacto.jsx`.
10. `Privacidad.jsx` — información de privacidad.

`TarjetaProducto` se reutiliza en Inicio y Productos y recibe distintos productos mediante props. La petición no se mezcla con el componente que dibuja el dato: `useApi`/`SeccionAPI` manejan datos y `TarjetaDato` presenta la información.

## 5. Estilos y accesibilidad

La identidad usa tonos café, crema y dorado mediante variables CSS. Se agregó responsive para pantallas pequeñas, incluyendo un punto específico para 320–360 px. Los botones tienen hover, los campos tienen focus visible y los botones de envío pueden quedar disabled mientras procesan.

La sección API tiene un estado de carga visual mediante spinner, un estado de error con botón de reintento y un estado vacío diferenciado.

## 6. API

Se eligió **Open-Meteo** porque ofrece información meteorológica pública y gratuita sin una clave secreta, y el dato aporta contexto al visitante de una cafetería.

Endpoint utilizado: pronóstico actual de Ciudad de Guatemala con temperatura, humedad relativa y velocidad del viento.

La petición se realiza mediante `fetch` y comprueba explícitamente `respuesta.ok`, por lo que respuestas HTTP 4xx/5xx se convierten en estado de error.

Estados:

- **Cargando:** limitar Network a Slow 3G.
- **Error:** modificar temporalmente el endpoint o desconectar la red.
- **Vacío:** provocar una respuesta sin objeto `current` durante una prueba controlada.
- **Éxito:** navegación normal con datos actuales.

El fallo de la API queda aislado de la landing: Hero, productos, confianza y CTA no dependen de la respuesta externa.

## 7. SEO

Se implementaron títulos y meta descripciones por ruta mediante `useTitulo`, canonical dinámico, Open Graph y datos estructurados JSON-LD. La landing utiliza un único `h1` en Hero y secciones con encabezados jerárquicos.

El contenido de la API es valor agregado para el visitante y no debe ser la base del posicionamiento orgánico. El contenido importante para SEO está escrito directamente en la landing.

Se conserva el sitemap/robots como parte del checklist de publicación y se preparó el despliegue para mantener rutas SPA al recargar.

## 8. Análisis y optimización

Antes de entregar se debe ejecutar Lighthouse y PageSpeed sobre la URL pública, registrar la medición inicial, aplicar optimizaciones y volver a medir. El análisis debe conectar rendimiento, comportamiento y adquisición:

- **Lighthouse/PageSpeed:** rendimiento, SEO y accesibilidad.
- **Search Console:** consultas, indexación y sitemap.
- **GA4:** interacción con el CTA y envío del formulario.

### Configuración pendiente de cuenta

GA4 y Search Console requieren acceso a las cuentas/propiedad del estudiante. El repositorio ya incluye la estructura para registrar eventos, pero **no se debe inventar un Measurement ID**. Al crear la propiedad GA4 se debe insertar el ID real y marcar el evento de conversión de contacto como evento clave.

## 9. Conclusión y mejoras futuras

1. Conectar el formulario a un backend real para almacenar consultas de forma segura.
2. Añadir una segunda API, por ejemplo tipo de cambio, para aportar información adicional al visitante.
3. Añadir caché de la información meteorológica para reducir peticiones repetidas.
