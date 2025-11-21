# 1. Análisis del repositorio

1. Estructura del proyecto
   `my-reactive-farm/
├── .env
├── .gitignore
├── README.md
├── eslint.config.js
├── folder-structure.txt
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── src/`

- Raiz del proyecto:

  - `.env`: presente, con un enlace para una API básica.
  - `package.json`, `packaje-lock.json`: para las dependencias y gestión de paquetes.
  - `vite.config.js`: configuración de Vite como bundler / dev server.
  - `eslint.config.js`: reglas de lint para el proyecto.
  - `folder-structure.txt`: un archivo en el que se detalla y se describe como esta organizado estructuralmente el proyecto.

- Carpeta `src/`:

  - En esta carpeta se encuentran todos los archivos utilizados en el proyecto:
    - `components/`: en esta carpeta se encuentran todos los componentes del proyecto ya sean reutilizables o de un solo uso.
    - `hooks/`: en la carpeta se encuentra un singular archivo `useFetchAnimals.js` el cual esta actualmente vacio.
    - `pages/`: en esta carpeta se encuentra tambien un singular archivo `Farm.jsx` el cual es la pagina principal de la app y donde se encuentra todo el codigo principal.
    - `services/`: en esta carpeta encontramos el archivo `animalApi.js` el cual se encarga toda la sección que llama la API y nos ayuda a manipularla.
    - `Àpp.css`, `App.jsx`, `index.css` y `main.jsx`: estos archivos son los encargados de tanto cargar la aplicación, invocar funciones y codigo de `Farm.jsx` y `DarkModeToggle.jsx` y cargarlo como una Single Page Application.

- Archivo `index.html`:
  Es el archivo usado para cargar la Single Page Application y siendo el punto de entrada a la aplicación

2. El manejo del estado (`useState`)

- Es usado principalmente para manejo de estados en los filtros para cuando se carga por primera vez y tambien para el manejo de errores dentro de la aplicación.

3. Los efectos (`useEffect`)

- Es usado para permitirle a la aplicación conectarse con el DOM del navegador, y la API, entre otros componentes de sistemas externos.

4. El consumo de API con Axios y MockAPI

- La API usada en la aplicación es una API básica de MockAPI la cual solo contiene unos pocos atributos, todo esto lo manipulamos usando Axios en el archvo `animalAPI.js` con el cual podemos usar varios metodos como el `GET`, `UPDATE` y `DELETE`.

5. El manejo de formularios y validaciones

- Todo el formukario se encuentra en un componente exclusivo llamado `AnimalForm.jsx` en el cual todos los campos tienen una forma de manejar errores y evitar que se mande información invalida, limitando al usuario y tambien limpiando el formulario o enviando los datos a la API para crear un objeto a elección del usuario.

6. El uso de TailwindCSS

- Tailwind es usado a travez de todo el proyecto y es importado en `index.css`, para poder manejar los estilos y a a vez poder manejar el modo oscuro, las utilidades y los estilos globales usados en toda la aplicacion.

# 2. Cuestionario de React

1. ¿Cuál es la diferencia entre un componente presentacional y un componente de página en React?
   Un componente presencial es aquel que no tiene logica en si, solamente es una parte más de la UI y solo reciben datos para renderizarlos.
   Por su lado, un componente de página representa la pagina o vista completa dentro de la aplicación, contiene la lógica de control, y maneja la interacción con los usuarios, la navegación, las peticiones de API y los estados.
   Un claro ejemplo de esto en el proyecto son los componentes en `components/` como por ejemplo `AnimalCard.jsx`, `AnimalList.jsx` o `Alert.jsx` los cuales solo reciben datos y los renderizan como una card, una lista con las cards o una alerta, mientras que en `pages/` se encuentra `farm.jsx` el cual es un componente de pagina debido a que toda la logica de los `useState` y `useEffect` se encuentran ahí, además de ser la vista principal de la aplicacion.
2. ¿Para que se usa `useState` en el proyecto?
   `useState` es usado en el proyecto para poder manejar más fácilmente los estados de diferentes componentes y recordar las elecciones del usuario para que estas se tengan tanto un valor predeterminado como los valores seleccionables por el usuario.
   Por ejemplo en los filtros, estos empiezan con el estado `"All"` el cual permite que todos los animales se muestren mientras que al cambiarlo se pueda "recordar" por que tipo fue cambiado.
3. ¿Cómo se usa `useEffect` para cargar datos desde MockAPI al inicio?
   - Inicializamos primero el programa con sus `useStates`
   - Disparamos el `useEffect`
   - Dentro del `useEffect` creamos una función asíncrona de Fetch
   - Ejeutamos la función.
4. ¿Cómo maneja el proyecto los estados de `loading`, `error` y lista vacia? ¿Qué se muestra al usuario en cada caso?
   El proyecto maneja estos diferentes estados por medio de alertas, en caso de `loading` lo muestra por medio del `loader.jsx`, en caso de `error` muestra estos diferentes errores por medio de `Alert.jsx` y, por ultimo, las listas vacias se muestra como una alerta por medio de `AnimalList.jsx` y `Alert.jsx` tambien.
5. ¿Qué significa que un formulario sea controlado en React?
   Que un formulario sea controlado en React significa todos los valores que se ingresan en este son controlados por estados de React, en lugar de tener que modificar el DOM, React mantiene los estados actualizados, esto por medio del manejo del evento `onChange`.
   En el caso del formulario del proyecto todo tipo de dato ingresado es administrado por medio de funciones y estados los cuales manejan lo que el usuario escribe, haciendo que se muestren alerta de error si el usuario no escribe los requisitos minimos.
6. ¿Por qué es buena práctica separar la lógica de datos en archivos como `animalsApi.js` en vez de hacer peticiones dentro de los componentes?
   Esto se debe a varios factores:
   - Separación de responsabilidades: Al mantener la lógica de obtención y manipulación de datos en modulos aparte, permite que la UI se enfoque solo en la presentación y en como mostrar estos datos.
   - Reutilización y Mantenimiento: Al centrar las llamadas de la API a un solo archivo este puede ser reutilizado en varios componentes sin repetir el codigo una y otra vez, además si algo falla o hay que mejorar el codigo solo se debe hacer en 1 archivo.
   - Claridad y limpieza del codigo: Mantiene los componentes limpios, legibles y fáciles de manejar y manipular, mejorando el flujo de trabajo.
7. ¿Qué hace que `AnimalCard` sea un componente reutilizable? ¿Cómo se podría usar una tarjeta similar en otro contexto?
   `AnimalCard` es un componente reutilizable debido a que puede ser usado una y otra vez para no repetir el codigo una y otra vez.
   Al mismo tiempo esta tarjeta puede ser usada, por ejemplo, para mostrar productos o servicios, tambien para mostrar cursos a los cuales entrar en una pagina de una universidad o colegio, entre otros muchos usos que se le pueden dar.
8. ¿Qué elementos del proyecto contribuyen a la accesibilidad?
   - `DarkModeToggle`: Al poder cambiar el estilo de la aplicación las personas que tienen ojos sensibles son capaces de ver más fácilmente la página.
   - `AnimalList`: La lista en la que se ordenan los objetos guardados en la API es pefecta para poder colocar las cartas creadas por `AnimalCard` de manera fácil y eficaz, haciendo que sean más fáciles de ver.
   - `Alert`: Las alertas son escenciales para poder informarle al usuario cuando un error se presenta ya sea por sus acciones o por errores en el código, haciendo el programa más accesible a usuarios por primera vez.
9. Antes de agregar una funcionalidad nueva, ¿qué pasos debes pensar según la filosofía de React?
   Antes de agregar una funcionalidad nueva se deben pensar en lo siguiente según la filosofía de React:
   - Entender el estado y los datos involucrados, evaluando que estado tienen estos mismos y como afectan las nuevas funcionalidades.
   - Pensar en la composición y reusabilidad de la función, si esta puede implementarse como un componente independiente o si debe extender uno ya existente.
   - Separar la lógica de la UI, manteniendo los datos logicos fuera de toda la UI, manteniendo los componentes limpios y enfocados solo a presentación.
10. ¿Qué conceptos de React aprendidos en este proyecto podrás reutilizar en otro tipo de aplicación?
    - `useState`: Este concepto es muy util para la modificación de estados de tanto objetos como de datos y recordar lo que el usuario selecciona
    - Componentes Reutilizables: Reducir la complejidad del codigo es escencial, por eso es que crear componentes reutilizables es de lo más util que podemos crear en React
    - Estructura del Proyecto: Saber como se estructura el proyecto para guiarse más fácilmente al momento de introducir o eliminar cosas es necesario para el orden y poder seguir el proyecto al pie de la letra
    - `useEffect`: Los efectos son de lo mejor que uno puede saber manejar al momento de crear una aplicación web, saber manejarlos y modificarlos para que den un resultado u otro al conectarse a una red externa es muy util para el futuro.
