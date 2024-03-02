import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatWinner'
})
export class FormatWinnerPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Separar el string por el guion medio y el arroba
    const parts = value.split('-');
    const nameParts = parts[1].split('@');

    // Obtener el número antes del guion medio y el nombre completo antes y después del arroba
    const number = parts[0];
    const fullName = nameParts[0] + ' ' + nameParts[1];
    console.log(number, fullName);
    // Retornar el string formateado
    return `${number} ${fullName}`;

  }
}
