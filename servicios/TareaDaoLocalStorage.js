angular.module('app01LocStoService',[]).factory('TareaDao', 
	['$window',function($window){
		var nombreTabla = "TAREAS";
		var seqTarea = "TAREA_SEQUENCE";

		var fxLastId = function(){
			var lastId=0;
			var item = $window.localStorage.getItem(seqTarea);
			if(item){
				lastId=parseInt(item);
			} 
			else {
				$window.localStorage.setItem(seqTarea,lastId);
			}
			return lastId;
		}

		var fxNextId = function(){
			var lastId=fxLastId()+1;
			$window.localStorage.setItem(seqTarea,lastId);
			return lastId;
		}


		var fxAlta = function(tarea){
			tarea.id = fxNextId();
			$window.localStorage.setItem(nombreTabla+":"+tarea.id, angular.toJson(tarea));
		}

		var fxBaja = function(tarea){
			console.log(tarea);
			$window.localStorage.removeItem(nombreTabla+":"+tarea.id);
		}

		var fxModificar = function(tarea){
			$window.localStorage.removeItem(nombreTabla+":"+tarea.id);
			$window.localStorage.setItem(nombreTabla+":"+tarea.id, angular.toJson(tarea));
		}

		var fxFindById = function(idBuscado){
			var elemento = $window.localStorage.getItem(nombreTabla+":"+idBuscado);
			return angular.fromJson(elemento);
		}

		var fxFindAll = function(){
			var listaResultado = [];
			var lastId =  fxLastId();
			console.log( lastId);
			for(var i =1; i<= lastId ; i++) {
				var elemento = $window.localStorage.getItem(nombreTabla+":"+i);
				console.log(elemento);
				if(elemento) listaResultado.push(angular.fromJson(elemento));
			}	
			console.log(listaResultado);
			return listaResultado;
		}

		return {
			guardarTarea: fxAlta,
			actualizarTarea: fxModificar,
			borrarTarea: fxBaja,
			buscarPorId: fxFindById,
			buscarTodos: fxFindAll
  		};
	}]
);