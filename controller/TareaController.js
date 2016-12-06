angular.module('app01').controller("TareaController",
	['$scope','$routeParams','TareaDao',function($scope,$routeParams,tareaDao){
		$scope.tituloAlta = "Alta de tareas";
		console.log($routeParams.tareaId);
		
		if($routeParams.tareaId>0){
			/*$scope.tareaActual = $scope.listaTareas.find(function(unaTarea){
				console.log(unaTarea.id);
				console.log($routeParams.taereaId);				
				return unaTarea.id === $routeParams.taereaId;
			});*/
			//$scope.tareaActual = tareaDao.buscarPorId($routeParams.tareaId);
			tareaDao.buscarPorId($routeParams.tareaId).then(
				function(data){
					$scope.tareaActual = data;
				}
			);
		} else{
			// definimos un objeto que almacena la tarea
			$scope.tareaActual = {
				fechaFin:new Date()
			};
		}

		$scope.agregarTarea = function(){
			if($routeParams.tareaId>0){
				tareaDao.actualizarTarea($scope.tareaActual);	
			}else{
				tareaDao.guardarTarea($scope.tareaActual);	
			}
			$scope.tareaActual={};
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			console.log($scope.tareaActual);		
			$scope.tareaActual = {
				fechaFin:new Date()
			};
			console.log($scope.tareaActual);			
		};
		
	}]
);