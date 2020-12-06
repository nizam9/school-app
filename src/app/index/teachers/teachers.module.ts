import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teachers-routing.module';

import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';



@NgModule({
  declarations: [TeacherDetailsComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeachersModule { }
