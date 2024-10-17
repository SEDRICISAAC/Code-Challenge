# Sistema de Gestión de Citas

Este es un sistema que permite gestionar citas de manera sencilla. Ya sea que tengas una clínica, barbería o cualquier otro servicio, esta aplicación te permitirá organizar, editar y eliminar citas. La interfaz es fácil de usar, y está diseñada para que los usuarios puedan administrar citas sin complicaciones.

## Características Principales

- **Crear Citas**: Añade fácilmente nuevas citas con detalles del cliente, fecha y hora.
- **Editar Citas**: Modifica las citas existentes en cualquier momento.
- **Eliminar Citas**: Elimina citas cuando ya no sean necesarias, con un paso de confirmación para evitar errores.
- **Listado de Citas**: Muestra todas las citas registradas con la información del cliente.
- **Validaciones**: Verifica que los datos ingresados sean correctos antes de crear o editar una cita.
- **Modal de Bienvenida**: Saluda al usuario cuando visita la página.
- **Carga de Datos**: Muestra un indicador de carga mientras la aplicación obtiene los datos del servidor.

## Herramientas Utilizadas Frontend

Este proyecto utiliza las siguientes tecnologías:

- **ReactJS con Vite**: Para una carga rápida y una experiencia de desarrollo ágil de la interfaz de usuario.
- **Tailwind CSS**: Para los estilos y la apariencia visual.
- **Axios**: Para la comunicación entre el frontend y el backend.
- **Spinner de carga**: Un indicador que muestra cuando los datos están siendo cargados.

## Herramientas Utilizadas Backend

- **Node.js y Express**: Para manejar el servidor y las rutas de la API.
- **Arrays en memoria**: Para simular una base de datos de citas

## Requisitos Básicos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu computadora.

- Node.js (versión 12 o superior)
- Npm o Yarn
- Vite para React (instalado a través de npm)

## Instalación del Proyecto

Aquí te explicamos cómo poner en marcha este sistema en tu propio equipo.

### 1. Clonar el proyecto

Primero, necesitarás descargar una copia del proyecto a tu computadora. Para esto, puedes clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/sistema-gestion-citas.git
cd sistema-gestion-citas
```

### 2. Instalar las dependencias

El proyecto tiene dos partes: el frontend (interfaz) y el backend (servidor).

Instalar el frontend:

```bash
cd sistema-gestion-citas
npm install
```

Instalar el backend:

```bash
cd sistema-gestion-citas-backend
npm install
```

Ejecución del Proyecto

### 3. Ejecutar el servidor (backend)

Para empezar con el backend, dirígete a la carpeta sistema-gestion-citas-backend y ejecuta el siguiente comando:

```bash
npm start
```

Esto pondrá en funcionamiento el servidor en http://localhost:3000.

### 3. Ejecutar la interfaz (frontend)

Luego, debes iniciar el frontend. Dirígete a la carpeta sistema-gestion-citas y ejecuta el siguiente comando:

```bash
npm run dev
```

El frontend estará disponible en http://localhost:5173, y desde allí podrás empezar a usar la aplicación.

### ¿Cómo Funciona?

Una vez que tengas tanto el servidor como la interfaz en funcionamiento:
Abre tu navegador y visita http://localhost:5173.
Verás una pantalla donde podrás crear, editar o eliminar citas.
Las citas se guardan y se muestran en una tabla donde puedes ver los detalles del cliente y la fecha de la cita.
Si intentas eliminar una cita, aparecerá un cuadro de confirmación para evitar errores accidentales.
