import { Injectable } from '@angular/core'
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class TombolaService {
  

  uploadedData: any[]=[];
  title: string='';
  anulados: number=0;
  ganador: number=0;



  logUploadedData() {
    console.log('Uploaded Data:', this.uploadedData);
  }

  getItem(key: string): any {
    if (key) {
      try {
        const item = localStorage.getItem(key);
        return JSON.parse(item!);
      } catch (error) {
        return error;
      }
    }
    return null;
  }

  setItem(key: string, value: any): void {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value.toString());
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }






  
}

