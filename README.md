# Reto BackendDeLaSuerte2023 webreactiva

El reto del BackendDeLaSuerte consiste en realizar un backend en el lenguaje que se quiera realizando en 3 semanas los retos propuestos.

El proyecto consiste en realizar pedidos en un restaurante que sirve a Zombies.

1 semana: realiar un endpoint para leer las comandas y otro endpoint para crear una nueva comanda (solo la fecha)

# La suerte

La suerte, ha hecho que me toque realizar el proyecto con la bbdd de cloudflare D1

[Documentación D1 de cloudflare](https://developers.cloudflare.com/d1/get-started/)

# Stack tecnológico

- Proyecto backend realizado con base de datos D1 de cloudflare mediante Workers.
- Npm y node.js (ver. 18.15). Para que funcione correctamente el proyecto debe de ser superior 16.13.0
- Se ha utilizado Wrangler (una herramienta de lineas de comando para construir Cloudflare Workers) para acceder a la bbdd D1.

# Opciones del Backend

La dirección del backend desplegado es:

[https://cocinazombie.jamsdev.workers.dev](https://cocinazombie.jamsdev.workers.dev)

Endpoints:

'/api/getAllOrders' -> Recoges todos los pedidos que hay

'/api/newOrder' -> Creas un nuevo pedido 

    le tienes que pasar un objeto con el atributo date y el valor del atributo en string
    Ejemplo: {date: '14/03/2023 20:30'}
