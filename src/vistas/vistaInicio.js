import { Vista } from './vista.js'

export class VistaInicio extends Vista{
    constructor(div, controlador) {
		super(div)
		this.controlador = controlador
		this.btncomenzar = document.getElementById('comenzar');
		this.btnInstrucciones = document.getElementById('Instrucciones');
		this.btnavisos = document.getElementById('avisos');

    this.btnInstrucciones.onclick=this.mostrarInstrucciones.bind(this);
    this.btnavisos.onclick=this.mostrarAvisos.bind(this);
    this.btncomenzar.onclick=this.mostrarPuzzle.bind(this);

    }
    mostrarInstrucciones(){
      this.controlador.mostrarInstrucciones();
    }
    mostrarAvisos(){
      this.controlador.mostrarAvisos();
    }
    mostrarPuzzle(){
      this.controlador.mostrarPuzzle();
    }

}