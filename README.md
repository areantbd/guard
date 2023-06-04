# Guardería

Aplicación para gestionar la web de una guardería o escuela infantil.

## Stack utilizado:
Para realizar este proyecto he utilizado:

## Back-end:

### `NodeJs`

EL Backend está creado con NodeJs y Express para crear una conexión con la base de datos.

### `DB`

Como base de datos he utilizado Mongo DB.

## API

Las llamadas a la base de datos por medio de la API son las siguientes:

<ul>
  <li><b>POST: `/create`</b> => crea un post en la base de datos.</li>
  <li><b>GET: `/`</b> => recupera todos los post desde la base de datos.</li>
  <li><b>GET: `/:id`</b> => localiza un post concreto de la base de datos.</li>
  <li><b>PATCH: `/:id`</b> => edita un post concreto y lo guarda en la base de datos./li>
  <li><b>DELETE: `/:id`</b> => elimina un post concreto de la base de datos.</li>
</ul>

## Front-end:

### `React`

El Frontend está creado con React y Vite:
<ul>
    <li><b>React router dom:</b> PAra gestionar las rutas dentro de la APP.</li>
    <li><b>useState:</b> para gestionar estados de cada componente.</li>
    <li><b>useEffect:</b> para gestionar que ocurre con el componente cuandp se monta.</li>
    <li><b>useHooks:</b> hook de terceros, en este caso utilicé "useWindowScroll" para hacer scroll up en las vistas.</li>
</ul>

### `Bootstrap`

he usado BootStrap para:
<ul>
    <li><b>Layout de la web</b></li>
    <li><b>Display responsive.</b></li>
    <li><b>Colours, buttons...</b></li>
    <li><b>Navbar</b></li>
</ul>

## Deploy:

aún no está desplegado.


