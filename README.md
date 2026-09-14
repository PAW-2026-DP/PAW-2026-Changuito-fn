# Changuito - Frontend

---

## Docs:
https://paw-2026-changuito-docs-git-master-jbrodi99s-projects.vercel.app/

## Design
https://www.figma.com/design/ZeL7MqjxUKq20VJu6yR9Us/Changuito?node-id=1-30&t=3KUKUqvGq6uRYl1U-1
---

Frontend de la aplicacion web Changuito, una plataforma para armar listas de compras, comparar precios entre supermercados y elegir la alternativa de compra mas conveniente.

Este proyecto se mantiene como HTML y CSS puro para la maquetacion inicial de la interfaz.

## Objetivo del frontend

El frontend sera la interfaz web para el cliente de Changuito. Permitira:

- Buscar productos por nombre y categoria.
- Consultar el detalle de un producto y comparar sus precios.
- Armar y editar una lista de compras.
- Ajustar cantidades y reutilizar listas frecuentes.
- Ejecutar el motor de optimizacion.
- Comparar compras en un solo supermercado o divididas entre dos.
- Ver el ahorro, los costos de envio y los productos faltantes.
- Confirmar pedidos con pago contra entrega.
- Consultar el estado y el detalle de los pedidos.
- Administrar el perfil, las direcciones de entrega y las listas guardadas.

## Stack actual

- HTML5
- CSS3
- Vite para levantar el proyecto en local
- Sin JavaScript por el momento

## Como levantarlo

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

3. Abrir la URL que muestre Vite en el navegador, normalmente:

```bash
http://localhost:5173
```

## Estructura inicial

```text
FrontEnd-Changuito/
├── assets/
├── components/
├── pages/
├── services/
├── styles/
├── utils/
└── README.md
```

## Responsabilidad de cada carpeta

### `assets/`
Imagenes, iconos y otros recursos visuales de la aplicacion.

### `components/`
Elementos reutilizables de la interfaz, como tarjetas de productos, buscadores, controles de cantidad, encabezados y modales.

### `pages/`
Pantallas principales del flujo del cliente:

- Inicio y buscador.
- Catalogo.
- Ficha de producto.
- Lista de compras.
- Resultado del optimizador.
- Checkout.
- Pedidos y seguimiento.
- Cuenta, direcciones y listas guardadas.
- Registro e ingreso.

### `services/`
Logica de comunicacion con el backend: autenticacion, catalogo, listas, optimizacion y pedidos.

### `styles/`
Hojas de estilo, variables visuales, layout y reglas responsive para movil y escritorio.

### `utils/`
Funciones auxiliares reutilizables, como formateo de precios, validaciones y transformacion de datos.

