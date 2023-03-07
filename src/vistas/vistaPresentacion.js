"use strict" //activo modo estricto
import {Vista} from './vista.js'

export class VistaPresentacion extends Vista {

	/**
     * Contructor de la clase VistaAvisos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
	     super(div)
          this.controlador = controlador
	}
}