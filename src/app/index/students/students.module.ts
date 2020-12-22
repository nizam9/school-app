import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AddStudentComponent } from './add-student/add-student.component';
import { StudentRoutingModule } from './students-routing.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CustomModule } from '../../shared/custom/custom.module';
import { FeeDetailsComponent } from './fee-details/fee-details.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    FeeDetailsComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModule
  ],
  exports: [
    StudentDetailsComponent,
    AddStudentComponent,
    FeeDetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsModule { }
