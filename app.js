angular.module('app01',['ngRoute','app01LocStoService'])
.config(function ($routeProvider,$locationProvider) {
    $routeProvider
    .when('/tarea', {
    	templateUrl: 'vistas/altaTarea.html',
        controller: 'TareaController'
    })
    .when('/tarea/:tareaId', {
        templateUrl: 'vistas/altaTarea.html',
        controller: 'TareaController'
    })
    .when('/lista', {
    	templateUrl: 'vistas/listaTarea.html',
        controller: 'ListaTareaController'
    }).otherwise({
        redirectTo: "/tarea"
    });
    $locationProvider.html5Mode(true);
});