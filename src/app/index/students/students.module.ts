import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentRoutingModule } from './students-routing.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentDetailsComponent,
    AddStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [
    StudentDetailsComponent,
    AddStudentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsModule { }
