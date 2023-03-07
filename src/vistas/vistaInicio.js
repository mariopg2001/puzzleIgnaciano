import { Vista } from './vista.js'

export class VistaInicio extends Vista{
    constructor(div, controlador) {
		super(div)
		this.controlador = controlador
    }
}