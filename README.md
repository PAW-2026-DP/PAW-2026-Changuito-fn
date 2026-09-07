# Changuito - Frontend

Frontend de la aplicacion web Changuito, una plataforma para armar listas de compras, comparar precios entre supermercados y elegir la alternativa de compra mas conveniente.

Esta primera version contiene solamente la estructura inicial de carpetas. No incluye archivos HTML, CSS ni JavaScript.

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

## Stack previsto

- HTML5
- CSS3
- JavaScript sin frameworks
- Comunicacion con el backend mediante solicitudes HTTP

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

