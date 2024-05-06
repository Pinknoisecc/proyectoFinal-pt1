import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTextTransform'
})
export class MyCustomTextTransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Texto transformado por el pipe';
  }

}
