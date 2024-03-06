import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { TombolaService } from '../../tombola.service';

@Component({
  selector: 'app-list-tombola',
  templateUrl: './list-tombola.component.html',
})
export class ListTombolaComponent {
  constructor(
    private tombolaService: TombolaService,
    private router: Router){}

  title: string = '';
  ganadores: number = 1;
  anulados: number = 0;
  participants: string = '';
  errorMessage: string = '';
  public uploadedData: any[]=[];

  guardarDatos() {

    if (this.title && this.ganadores && this.anulados && this.tombolaService.uploadedData.length > 0) {
      this.tombolaService.title = this.title;
      this.tombolaService.ganador = this.ganadores;
      this.tombolaService.anulados = this.anulados;
      this.router.navigate(['games/rifa']);
      console.log('title', this.tombolaService.title);
      console.log('ganador', this.tombolaService.ganador);
      console.log('anulados', this.tombolaService.anulados);
    }else {
        this.errorMessage = 'Por favor, complete todos los campos antes de continuar.';
      }

    
  }


  onFileChange(event: any) {
    const file = event.target.files[0];
    this.readExcelFile(file);

  }

  readExcelFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.tombolaService.uploadedData = XLSX.utils.sheet_to_json(sheet, { header: 1 });


    };
    reader.onerror = (error) => {
      console.error('Error reading Excel file:', error);
    };
    reader.readAsArrayBuffer(file);
  }

}



// if (this.title && this.ganadores && this.suplentes) {
    //   // Todos los campos están llenos, guardar en localStorage
    //   localStorage.setItem('title', this.title);
    //   localStorage.setItem('ganadores', this.ganadores.toString());
    //   localStorage.setItem('suplentes', this.suplentes.toString());
    //   localStorage.setItem('participants', this.participants);
    //   this.errorMessage = '';

    //   this.router.navigate(['games/rifa']);

    // } else {
    //   this.errorMessage = 'Por favor, complete todos los campos antes de continuar.';
    // }