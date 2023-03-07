import { Vista } from './vista.js'

export class VistaInicio extends Vista{
    constructor(div, controlador) {
		super(div)
		this.controlador = controlador
		this.btncomenzar = document.getElementById('btncomenzar');
		this.btnInstrucciones = document.getElementById('btninstrucciones');
		this.btnavisos = document.getElementById('btnavisos');
		this.btnCreditos = document.getElementById('btncreditos');

    this.btnInstrucciones.onclick=this.mostrarInstrucciones.bind(this);
    this.btnavisos.onclick=this.mostrarAvisos.bind(this);
    this.btncomenzar.onclick=this.mostrarPuzzle.bind(this);
    this.btnCreditos.onclick=this.mostrarCreditos.bind(this);

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
    mostrarCreditos(){
      this.controlador.mostrarCreditos();
    }
}