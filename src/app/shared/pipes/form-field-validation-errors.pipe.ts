import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {

    console.log(value);

if (value) {

  let messages: string[] = [];

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
        console.log(key);

        if (key === 'required') messages.push ('Este campo es requerido');
        if (key === 'pattern') messages.push('No cumple con el formato requerido')
        if (key === 'maxlenght')
          messages.push(
        'No puede tener más de ${errorDetaul.requiredLenght} caracteres');

        if (key === 'minlenght')
          messages.push(
        'Debe tener al menos ${errorDetaul.requiredLenght} caracteres');

        
      }
    }

  return messages.join('. ');
}

    return null;
  }

}
