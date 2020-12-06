import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './directives/date.pipe';


@NgModule({
  declarations: [DatePipe],
  imports: [
    CommonModule
  ],
  exports: [DatePipe]
})
export class CustomModule { }
