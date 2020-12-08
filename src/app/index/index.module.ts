import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SharedModule } from '../shared/shared.module';
import { HomeGuard } from '../shared/services/auth-guard.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [IndexComponent, DashboardComponent, TeachersComponent , StudentsComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule, FormsModule, ReactiveFormsModule,
    StudentsModule
  ],
  providers: [HomeGuard],
  exports: [StudentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
