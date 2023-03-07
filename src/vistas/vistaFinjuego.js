"use strict" //activo modo estricto
import {Vista} from './vista.js'

export class VistaFinJuego extends Vista {

	/**
     * Contructor de la clase VistaAvisos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.btnInicio = document.getElementsByClassName('inicio');
          this.btnInicio.onclick=this.mostrarInicio.bind(this);
	}
     mostrarInicio(){
          this.controlador.mostrarInicio();
        }
}