"use strict" //activo modo estricto
import {Modelo} from '../modelos/modelo.js'
import {VistaAvisos} from '../vistas/vistaAvisos.js'
import {VistaCreditos} from '../vistas/vistaCreditos.js'
import {VistaFinJuego} from '../vistas/vistaFinjuego.js'
import {VistaInicio} from '../vistas/vistaInicio.js'
import {VistaInstruccion} from '../vistas/vistaInstruccion.js'
import {VistaPuzzle} from '../vistas/vistaPuzzle.js'


/**
 * Clase Controlador que administra las vistas
 */
class Controlador {
	/**
	 * Constructor de la clase Controlador
	 * Cuando carga la web ejecuta el método iniciar
	 */
	constructor() {
		window.onload=this.iniciar.bind(this)
	}

	/**
	 * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
	 */
	iniciar() {
		this.modelo = new Modelo(this)
		this.iniciarVistas()
	}

	/**
	 * Método iniciarVistar que se ejecuta al iniciar el modelo
	 */
	iniciarVistas(){
        this.divInicio = document.getElementById('inicio')
        this.vistaInicio = new VistaInicio(this.divInicio, this)

        this.divCreditos = document.getElementById('Creditos')
        this.vistaCreditos = new VistaCreditos(this.divCreditos, this)

		this.divAvisos = document.getElementById("avisos");
		this.vistaAvisos=new VistaAvisos(this.divAvisos, this);

		this.divFinJuego = document.getElementById('Fin')
        this.vistaFinJuego = new VistaFinJuego(this.divFinJuego, this)

		this.divInstrucciones = document.getElementById('Instrucciones')
		this.vistaInstrucciones = new VistaInstruccion(this.divInstrucciones, this)

		this.divPuzzle = document.getElementById('Puzzle')
		this.vistaPuzzle = new VistaPuzzle(this.divPuzzle, this)
        
        this.mostrarInicio()
	}
	ocultarVistas(){
        this.vistaInicio.mostrar(false)
		this.vistaPuzzle.mostrar(false)
		this.vistaInstrucciones.mostrar(false)
		this.vistaFinJuego.mostrar(false)
		this.vistaAvisos.mostrar(false)
		this.vistaCreditos.mostrar(false)
	}
    mostrarInicio(){
        this.ocultarVistas()
		this.vistaInicio.mostrar(true)
    }
	mostrarPuzzle(){
        this.ocultarVistas()
		this.vistaPuzzle.mostrar(true)

    }
	 mostrarInstrucciones(){
        this.ocultarVistas()
		this.vistaInstrucciones.mostrar(true)
    }
	mostrarFinJuego(){
        this.ocultarVistas()
		this.vistaFinJuego.mostrar(true)
    }
	mostrarAvisos(){
        this.ocultarVistas()
		this.vistaAvisos.mostrar(true)
    }
	mostrarCreditos(){
        this.ocultarVistas()
		this.vistaCreditos.mostrar(true)
    }

	sacarSiguiente(numero){
		console.log(this.modelo)
		return this.modelo.darNivel(numero);
	}

	getModelo() {
		return this.modelo
	}
}
const app = new Controlador()