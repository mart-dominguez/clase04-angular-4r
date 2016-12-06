angular.module('app01').controller("AppController",
	['$scope',function($scope){
		$scope.tituloApp="Aplicacion ejemplo angular";
		$scope.menuPush = [
			{
				opcion: "Gestion Tareas",
				url : "#/tarea"
			},
			{
				opcion: "Lista Tareas",
				url : "#/lista"
			}

		];
		$scope.menu = [
			{
				opcion: "Gestion Tareas",
				url : "/tarea"
			},
			{
				opcion: "Lista Tareas",
				url : "/lista"
			}

		];

		$scope.prioridades = [
			{
				id:1,
				titulo:"Urgente"
			},
			{
				id:2,
				titulo:"Alta"
			},
			{
				id:3,
				titulo:"Media"
			},
			{
				id:4,
				titulo:"Baja"
			}
		];
	}]
);