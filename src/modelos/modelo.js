"use strict" //activo modo estricto
/**
 * Clase Modelo que gestiona los datos de la web
 * */ 

export class Modelo{

	constructor(controlador, callback) {
		this.controlador = controlador
		this.callback = callback
		this.callbacks = []	// Array de callbacks para implementar el observador
		callback()
	}
	
	/**
	* Método registrar que registra un objeto para informarle de los cambios en el Modelo
	* @param {Function} Función de callback que será llamada cuando cambien los datos
	*/
	registrar(callback){
        this.callbacks.push(callback)
	}

	/**
	* Método avisar que ejecuta todos los callback registrados.
	*/
	avisar(){
	    for(let callback of this.callbacks) {
			callback()
		}
	}
}