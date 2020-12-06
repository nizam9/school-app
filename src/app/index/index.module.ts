import { NgModule } from '@angular/core';
import {IndexRoutingModule} from './index-routing.module';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import {IndexComponent} from './index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SharedModule } from '../shared/shared.module';
import { HomeGuard } from '../shared/services/auth-guard.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, DashboardComponent, TeachersComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule , FormsModule, ReactiveFormsModule
  ],
  providers: [HomeGuard]
})
export class IndexModule { }
