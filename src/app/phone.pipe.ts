
import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
@Pipe({
    name: 'number'
})
export class numberPipe implements PipeTransform {
    transform(rawNum:any) {
        const Country = rawNum.slice(0, 2);
        const Mid = rawNum.slice(2, 5);
        const Last = rawNum.slice(5);
        return `${Country}${Mid}-${Last}`;
    }
}