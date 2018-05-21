# Descripción del proyecto

Con la tecnología Angular se desarrolla una aplicación para la gestión de usuarios de una determinada entidad bancaria. La aplicación se compone de un login, en el cual al introducir los datos correctos, se tiene acceso a toda la aplicación desde la pantalla de inicio, donde aparecerá una lista de todos los clientes de dicho banco. Esta aplicación tiene diferentes categorías:
1. Crear nuevo usuario. Si se hace click sobre el icono de insertar usuario te llevará a una pantalla de ingreso de usuario para meter sus respectivos datos.
2. Consultar usuario. Si se hace click sobre un cliente se muestra una vista más detallada con la información del cliente en la cual donde se pueden editar y borrar datos. También hay una pestaña llamada cuentas en la que se podrá acceder a la información de cada cuenta.

# Lanzar la aplicación

1. Para correr la aplicación con service workers. Ir al directorio del proyecto y desde ahí al directorio `dist/`. Ejecutar `http-server -p 4200`. Desde el navegador ir a `http://localhost:4200/`.

2. Para correr la aplicación sin el uso de service workers. Ir al directorio del proyecto. Ejecutar `ng server -p 4200`. Desde el navegador ir a `http://localhost:4200/`.

# Bankmanager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


