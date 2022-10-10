# Desarrollo Web - Fundamentos de Back-end - Proyecto API

_Es una API que sirve como evaluacion para el modulo de Back-end Fundamentals_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local o deployada._

### Pre-requisitos 📋

_Software necesario para ejecutar el proyecto_

```
    - Nodejs -version 16.15.1 o superior
    - Navegador Web
    - Editor de texto/codigo o IDE, tambien puedes usar block de notas
    - Tener git de forma local
```

_Conoce el Modelo y la Arquitectura de la API_

![Image text](https://cdn.discordapp.com/attachments/997299256291491874/1028597372860772403/modelooo.jpg)

_Modelo Relacional de la Base de Datos_

![Image text](https://cdn.discordapp.com/attachments/997299256291491874/1028597372625891408/entidad.jpg)

### Instalación 🔧

_Clonar el Repositorio_

```
    - git clone https://github.com/davidhoil/ProyectoAPI.git
```

_Instalar dependencias del proyecto_

```
    - npm install
```

_Ejecutar de forma local_

```
    - npm run dev //se ejecutara nodemon, si no tienes instalado nodemon instala este modulo con npm install -g nodemon
```

## Ejecutando las pruebas ⚙️

_IMPORTANTE - Antes de continuar presta atención_

```
    - No escribas en mayusculas, todo debe ser en minusculas
    - Cuando se requiera un numero de telefono deben ser 10 digitos, ni más, ni menos
    - Puedes obtener/leer/ver todos los datos obtenidos sin estar loggeado
    - Para Crear ya sea un Employee, Department o Compañy debes estar loggeado
    - Para Acualizar ya sea un Employee, Department o Compañy debes estar loggeado
    - Para Eliminar ya sea un Employee, Department o Compañy debes loggearte con un usuario el cual su username es Admin
    -SI HAY MAS COSAS QUE NO SE DEBEN DE HACER, ESCRIBELAS
```

## Registrarse (Sign up)

Para regristarse es necesario enviar una petición HTTP al servidor con el metodo POST a la siguiente dirección url para el endpoint Sign up
```
https://proyectoapi-f2.herokuapp.com/user/signUp
```

Enviaremos la información en formato JSON con los siguientes atributos y valores de ejemplo.

```json
{
   "username": "alejandro",
   "name": "alejandro",
   "lastname": "sanchez",
   "email": "alejandro10m_568@hotmail.com",
   "password": "12345"
}
```

![Image text](https://github.com/ArturAE/ProyectApi/blob/main/images/singup.PNG)

Una vez enviada la petición al servidor se nos creara el usuario con toda la información introducida.

## Iniciar sesión (Login)

Para acceder a la aplicación es necesario que exista el usuario con sus credenciales de acceso, para poder enviar una petición HTTP al servidor con el metodo POST a la siguiente dirección url para el endpoint Log in
```
https://proyectoapi-f2.herokuapp.com/user/logIn
```

Enviaremos la información en formato JSON con los siguientes atributos y valores de ejemplo.

```json
{
    "username": "alejandro",
    "password": "12345"
}
```

Una vez enviada la petición al servidor se nos creara el usuario con toda la información introducida se nos regresara su JSON Web Token con el que podremos hacer acciones sobre la base de datos.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028854413294567484/unknown.png?width=1270&height=587)


## Crear un empleado (Add employee)

Para crear un nuevo empleado es necesario enviar una petición HTTP al servidor con el metodo POST a la siguiente dirección url para el endpoint Add Employee
```
https://proyectoapi-f2.herokuapp.com/employee
```

Enviaremos la información en formato JSON con los siguientes atributos y valores de ejemplo.

```json
{
	"first_name": "juan",
	"last_name": "lopez",
	"phone": "8887776556",
	"address": "av. juarez #456",
	"email": "juana@gmail.com",
	"department": "marketing"
}
```

Una vez enviada la petición al servidor se nos creara el empleado con toda la información introducida, recordemos que es necesario iniciar sesión para poder crear el empleado, si no nos hemos autentificado anteriormente no podremos realizar está acción, es por esto que debemos de anexar a la petición el JSON Web Token del usuario que se autentifico para realizar está accón.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028855782088912987/unknown.png)

Procedemos a enviar la petición.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028855397890674769/unknown.png?width=986&height=586)


## Obtener un empleado (Get employee)

Para obtener a un empleado anteriormente registrado es necesario enviar una petición HTTP al servidor con el metodo GET a la siguiente dirección url para el endpoint Get Employee, es necesario especificar el ID del empleado el cual queremos obtener, igualmente si no nos hemos autentificado anteriormente no podremos realizar está acción, es por esto que debemos de anexar a la petición el JSON Web Token del usuario que se autentifico para realizar está accón.
```
https://proyectoapi-f2.herokuapp.com/employee/1
```

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028856489076588584/unknown.png)

Una vez enviada la petición al servidor se nos retornara al empleado solicitado si este existe en la base de datos.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028856914592923708/unknown.png?width=1070&height=586)


## Acutalizar un empleado (Update employee)

Para actualizar a un empleado es necesario enviar una petición HTTP al servidor con el metodo PATCH a la siguiente dirección url para el endpoint Update Employee
```
https://proyectoapi-f2.herokuapp.com/employee/1
```

Enviaremos la información en formato JSON con los siguientes atributos y valores de ejemplo.

```json
{
	"first_name": "alejandro",
	"phone": 3337776555,
	"email": "alejandro@gmail.com",
	"department": "programador"
}
```
![Image text](https://media.discordapp.net/attachments/997299256291491874/1028858186075209738/unknown.png)


Una vez enviada la petición al servidor se nos actualizara el empleado con toda la información introducida, recordemos que es necesario iniciar sesión para poder crear el empleado, si no nos hemos autentificado anteriormente no podremos realizar está acción, es por esto que debemos de anexar a la petición el JSON Web Token del usuario que se autentifico para realizar está accón.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028858287669653505/unknown.png)

Procedemos a enviar la petición.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028858392820858961/unknown.png?width=1025&height=587)



## Obtener todos los empleados (Get employees)

Para obtener a todos los empleados registrados en la base de datos  es necesario enviar una petición HTTP al servidor con el metodo GET a la siguiente dirección url para el endpoint Get Employees, en esté caso no que iniciemos sesión, por lo tanto no debemos de anexar a la petición el JSON Web Token.
```
https://proyectoapi-f2.herokuapp.com/employee
```

Una vez enviada la petición al servidor se nos retornara a todos los empleados registrados en la base de datos.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028858531824283648/unknown.png?width=923&height=586)




## Eliminar a un empleado (Delete employee)

Para esté caso no solo es necesario iniciar sesión para poder eliminar el empleado, si no que tambien debemos de iniciar sesión con el usuario administrador, por lo tengo iniciamos sesión con un usuario administrador, por lo que enviamos los siguientes datos para las credenciales de un usuario administrador.
```json
{
    "username": "alejandro",
    "password": "12345"
}
```

Para eleminar a un empleado es necesario enviar una petición HTTP al servidor con el metodo DELETE a la siguiente dirección url para el endpoint Delete Employees
nos hemos autentificado anteriormente no podremos realizar está acción, es por esto que debemos de anexar a la petición el JSON Web Token del usuario que se autentifico para realizar está accón.
```
https://proyectoapi-f2.herokuapp.com/employee/2
```

Una vez enviada la petición al servidor se nos retornara unos corchetes, estó nos especifica que se ha eliminado correctamente el usuario.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028859656396881920/unknown.png?width=1309&height=586)

Si volvemos a obtener los empleadoos, nos damos cuenta que ya no existe el empleado que hemos eliminado, es decir el empleado con ID = 2.

![Image text](https://media.discordapp.net/attachments/997299256291491874/1028859827981647902/unknown.png?width=933&height=586)



## Despliegue 📦

_Para hacer el despliegue de la API o probarla de forma local, crea un archivo .env y usa de ejemplo el archivo .env.example del repositorio_

## Construido con 🛠️

_Herramientas Utilizadas_

- [VisualStudio Code](https://code.visualstudio.com/) - Editor de codigo utilizado
- [Git](https://git-scm.com/) - Sistema de control de versiones utilizado
- [GitHub](https://github.com/) - Servicio para alojar proyectos utilizando el sistema de control de versiones Git
- [NodeJS](https://nodejs.org/en/) - Entorno de ejecución de JavasScript
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relaciona utilizada
- [Heroku](https://signup.heroku.com/login) - Usado para Deployar nuestra API

## Dependencias/Paquetes utilizadas 📌

- [express]
- [express-jwt]
- [passport]
- [passport-local]
- [pg]
- [pg-hstore]
- [sequelize]
- [swagger-jsdoc]
- [swagger-ui-express]

## Autores ✒️

- **Alejandro Sánchez** - _Manejod de Sesiones y Seguridad_ - [Alejandro10m10](https://github.com/Alejandro10m10)
- **Angel David Huchim** - _Documentación y Deploy de la API_ - [davidhoil](https://github.com/davidhoil)
- **Luis Arturo Arredondo Espínola** - _Creación de los modelos, estructura del proyecto, rutas y el video_ - [ArturAE](https://github.com/ArturAE)

Puedes ver el video del desarrollo de la API aqui [Video](https://youtu.be/eKRC1o640F0).

## Agradecimientos 🎁

- Muchas gracias Bedu y Becas Santander por la oportunidad y conocimientos impartidos para poder lograr el desarrollo de esta API y desarrollar nuestras habilidades para poder aplicarlas en ambitos sobre Tecnologia y Desarrollo
