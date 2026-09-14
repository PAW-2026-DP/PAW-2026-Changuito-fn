# Changuito — Frontend Cliente

Frontend de la aplicación web **Changuito**, una plataforma para armar listas de compras, comparar precios entre supermercados y elegir la alternativa de compra más conveniente.

## Enlaces del proyecto

- **Documentación:** https://paw-2026-changuito-docs.vercel.app/
- **Wireframes (Figma):** https://www.figma.com/design/ZeL7MqjxUKq20VJu6yR9Us/Changuito
- **Repositorios del TP Integrador:**
  - [Frontend Cliente](https://github.com/PAW-2026-DP/PAW-2026-Changuito-fn) (este repositorio)
  - [Frontend Backoffice](https://github.com/PAW-2026-DP/PAW-2026-Changuito-Backoffice-fn)
  - [Frontend Riders](https://github.com/PAW-2026-DP/PAW-2026-Changuito-Riders-fn)
  - [Backend](https://github.com/PAW-2026-DP/PAW-2026-Changuito-bn)
  - [Documentación](https://github.com/PAW-2026-DP/PAW-2026-Changuito-Docs)

## Objetivo del frontend

Interfaz web para el cliente de Changuito. Permite:

- Buscar productos por nombre y categoría.
- Consultar el detalle de un producto y comparar sus precios.
- Armar y editar una lista de compras.
- Ajustar cantidades y reutilizar listas frecuentes.
- Ejecutar el motor de optimización.
- Comparar compras en un solo supermercado o divididas entre dos.
- Ver el ahorro, los costos de envío y los productos faltantes.
- Confirmar pedidos con pago contra entrega.
- Consultar el estado y el detalle de los pedidos.
- Administrar el perfil, las direcciones de entrega y las listas guardadas.

## Stack

- HTML5
- CSS3
- JavaScript sin frameworks ni librerías de terceros
- Comunicación con el backend mediante solicitudes HTTP sobre `fetch`

---

## Requisitos

| Componente | Notas |
| :---- | :---- |
| Navegador moderno | Chrome, Firefox, Edge o Safari en versión actual |
| Un servidor HTTP estático | Necesario para desarrollo: abrir los archivos con `file://` rompe las peticiones a la API por política de origen |
| [Backend de Changuito](https://github.com/PAW-2026-DP/PAW-2026-Changuito-bn) | Corriendo y accesible, para las pantallas que consumen datos |

No hay dependencias que instalar ni proceso de build: son archivos estáticos.

---

## Puesta en marcha local

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/PAW-2026-DP/PAW-2026-Changuito-fn.git
   cd PAW-2026-Changuito-fn
   ```

2. **Configurar la URL de la API**

   En `services/config.js`, apuntar la constante de la URL base al backend local:

   ```js
   export const API_BASE_URL = "http://localhost:8000/api";
   ```

3. **Levantar un servidor estático**

   Con Python:

   ```bash
   python -m http.server 5500
   ```

   O con la extensión **Live Server** de Visual Studio Code (clic derecho sobre `index.html` → *Open with Live Server*).

4. **Abrir** http://localhost:5500

> **Nota sobre CORS:** el backend habilita explícitamente los orígenes de los tres frontends. Si se cambia el puerto de desarrollo, hay que agregarlo en la configuración de CORS del backend.

> **TODO equipo:** `services/config.js` todavía no existe. El mecanismo concreto de configuración del endpoint se define junto con la implementación, en la tercera entrega.

---

## Deployment

Al ser un sitio estático, puede publicarse en cualquier hosting de archivos estáticos o en el mismo servidor Apache que sirve la API, bajo su propio dominio o subdominio.

**Pasos:**

1. Configurar la URL de la API apuntando al backend de producción (por HTTPS).
2. Subir el contenido del repositorio al directorio público del hosting.
3. Verificar que el origen del sitio esté habilitado en la política de CORS del backend.
4. Servir todo el sitio por HTTPS: si la página se sirve por HTTP y la API por HTTPS (o al revés), el navegador bloquea las peticiones por contenido mixto.

**Checklist previo a publicar:**

- [ ] La URL de la API apunta a producción, no a `localhost`
- [ ] El sitio se sirve por HTTPS
- [ ] El origen está habilitado en el CORS del backend
- [ ] No quedaron credenciales, tokens ni datos de prueba en el código

---

## Estructura del repositorio

```text
PAW-2026-Changuito-fn/
├── assets/      Imágenes, íconos y recursos visuales
├── components/  Elementos reutilizables de interfaz
├── pages/       Pantallas principales del flujo del cliente
├── services/    Comunicación con el backend
├── styles/      Hojas de estilo, variables y reglas responsive
└── utils/       Funciones auxiliares
```

### Responsabilidad de cada carpeta

- **`assets/`** — Imágenes, íconos y otros recursos visuales de la aplicación.
- **`components/`** — Elementos reutilizables de la interfaz: tarjetas de productos, buscadores, controles de cantidad, encabezados y modales.
- **`pages/`** — Pantallas del flujo del cliente: inicio y buscador, catálogo, ficha de producto, lista de compras, resultado del optimizador, checkout, pedidos y seguimiento, cuenta, direcciones y listas guardadas, registro e ingreso.
- **`services/`** — Lógica de comunicación con el backend: autenticación, catálogo, listas, optimización y pedidos.
- **`styles/`** — Hojas de estilo, variables visuales, layout y reglas responsive para móvil y escritorio.
- **`utils/`** — Funciones auxiliares reutilizables: formateo de precios, validaciones y transformación de datos.

## Estado actual

Estructura inicial de carpetas y wireframes definidos. La maquetación HTML/CSS y la lógica en JavaScript corresponden a la tercera entrega.
