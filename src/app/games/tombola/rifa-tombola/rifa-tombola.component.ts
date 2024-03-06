
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TombolaService } from '../../tombola.service';


@Component({
  selector: 'app-rifa-tombola',
  templateUrl: './rifa-tombola.component.html',
  styleUrl: './rifa-tombola.component.css',
  // imports: [ScreenSorteoComponent]
})

export class RifaTombolaComponent implements OnInit, OnDestroy{

  constructor(private tombolaService:TombolaService){}
  ngOnInit(): void {
    this.title = this.tombolaService.title;
    this.anulados = this.tombolaService.anulados;
    this.ganadores = this.tombolaService.ganador;
  }

  uploadedData: any[] = [];
  winners: any[] = []; // Arreglo para almacenar todos los ganadores
  winner: string='';
  winnerIndex: number = 0;
  interval: any;
  selectedWinner:boolean=false;
  anulados: number = 0;
  ganadores: number = 0;
  title:string = '';

  getData() {
    this.selectedWinner = false; // Mostrar el segundo div cuando se han mostrado todos los ganadores

    // Obtener los datos del servicio
    this.uploadedData = this.tombolaService.uploadedData;

    // Verificar si hay datos cargados
    if (this.uploadedData.length > 0) {
      // Realizar 50 iteraciones aleatorias
      for (let i = 0; i < 20; i++) {
        this.shuffle(); // Mezclar los elementos aleatoriamente en cada iteración
        // Almacenar el ganador actual en el arreglo de ganadores
        const randomIndex = Math.floor(Math.random() * this.uploadedData.length);
        this.winners.push(this.uploadedData[randomIndex]);
      }

      // Iniciar el intervalo para mostrar los ganadores
      this.interval = setInterval(() => {
        if (this.winnerIndex < this.winners.length) {
          this.winner = this.winners[this.winnerIndex];
          this.winnerIndex++;
        } else {
          clearInterval(this.interval); // Detener el intervalo cuando se han mostrado todos los ganadores
          this.selectedWinner = true; // Mostrar el segundo div cuando se han mostrado todos los ganadores
        }
      }, 100);
    } else {
      console.log("No hay datos cargados.");
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Limpiar el intervalo cuando el componente se destruye
  }

  // Función para permutar aleatoriamente los elementos del arreglo (algoritmo de Fisher-Yates)
  private shuffle() {
    for (let i = this.uploadedData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.uploadedData[i], this.uploadedData[j]] = [this.uploadedData[j], this.uploadedData[i]];
    }
  }



}

