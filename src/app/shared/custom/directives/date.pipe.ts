'use strict';

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'datePipe' })
export class DatePipe implements PipeTransform {


    transform(date) {
        console.log(date , 'datedate')
        return String(`${date.day}-${date.month}-${date.year}`);
    }
}

