"use strict" //activo modo estricto
import {Vista} from './vista.js'

export class VistaPuzzle extends Vista {

	/**
     * Contructor de la clase VistaAvisos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.synth = window.speechSynthesis;
          this.nivel = 0;
          this.btnInicio = document.getElementById('volver1');
          this.btnInicio.onclick=this.mostrarInicio.bind(this);

          this.btnFin = document.getElementById('finpuzzle');
          this.btnFin.onclick=this.finPuzzle.bind(this);


          this.level = this.mostrarNivel(this.nivel);
	}
     mostrarInicio(){
          this.controlador.mostrarInicio();
     }
     mostrarNivel(nivel){
          return this.controlador.sacarSiguiente(nivel)
     }

     finPuzzle(){
          //mostrar div tras finalizar con texto y botones
          console.log(this.level)
          this.divPuzzle = document.getElementById('Puzzle')
          this.divFinPuzzle = document.getElementById('divfinpuzzle')
          this.divFinPuzzle.style.display = 'block'
          this.divPuzzle.style.filter = 'blur(8px)'
          this.divTexto = document.createElement('div')
          this.divTexto.style.backgroundColor = 'blue'
          this.divTexto.style.textAlign = 'center'
          this.divTexto.style.margin = '0 auto'
          this.divTexto.style.width = '700px'
          this.divTexto.style.height = '300px'
          this.divFinPuzzle.appendChild(this.divTexto)

          //botones sonido y texto
          this.pTexto = document.createElement('p')
          this.pTexto.style.textAlign = 'center'
          this.pTexto.textContent = this.level.texto
          this.divTexto.appendChild(this.pTexto)
          
          this.btnPlay = document.createElement('button')
          this.btnPause = document.createElement('button')
          this.btnResume = document.createElement('button')

          this.btnPlay.textContent = 'Play'
          this.btnPause.textContent = 'Pause'
          this.btnResume.textContent = 'Resume'

          this.divTexto.appendChild(this.btnPlay)
          this.divTexto.appendChild(this.btnPause)
          this.divTexto.appendChild(this.btnResume)

          //leer texto
          this.leer(this.level.texto)
          this.pausar()
          this.resumir()

          this.btnSiguiente =  document.createElement('button')
          this.btnSiguiente.textContent = 'Siguiente'
          this.divTexto.appendChild(this.btnSiguiente)

          this.nivel++
          this.pasarNivel(this.nivel)
          

     }

     textToSpeech(texto) {
          let utterance = new SpeechSynthesisUtterance(texto);
          var voices = window.speechSynthesis.getVoices();
          utterance.rate = 1.3;
          utterance.voice = voices[2]
          this.synth.speak(utterance);
      }
  
      leer(texto) {
          this.btnPlay.addEventListener('click', () => {
               this.btnPlay.style.display = 'none'
               this.textToSpeech(texto)
           })
      }
  
      pausar() {
          this.btnPause.addEventListener('click', () => {
               this.synth.pause()
           })
      }
      resumir(){
          this.btnResume.addEventListener('click', () => {
               this.synth.resume()
           })
      }

      pasarNivel(nivel) {
          this.btnSiguiente.addEventListener('click', () => {
               this.divFinPuzzle.style.display = 'none'
               this.divPuzzle.style.filter = 'blur(0px)'
               this.btnFin.addEventListener('click', () => {
                    this.level =this.mostrarNivel(this.nivel);
                    this.finPuzzle()
               })
           })
      }
}