# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Demo Steps

In this demo, all topics from the presentation will be implemented.

1. Create a class (or an interface) that describes a Pokemon from the Pokemon API
2. Create a new Component that will display Data for a Pokemon object.
    - Using data binding, we will link the fields of the Pokemon object to the UI
3. Create a service that will provide pokemon data
4. When the **GO!** button is clicked, use an observable subscription to get a Pokemon object from the service.
5. The service should make a GET request to the Pokemon API, convert the data into a Pokemon object, and return the observable
6. The Pokemon object that is passed to the Pokemon component should update along with the UI
