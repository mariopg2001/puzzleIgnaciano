import { Vista } from './vista.js'

class VistaInicio extends Vista{
    constructor(div, controlador) {
		super(div)
		
		this.controlador = controlador

		this.btnInicio = document.getElementsByTagName('li')[0]
		this.divInicio = document.getElementsByClassName('contenedor')[0]
    }
}