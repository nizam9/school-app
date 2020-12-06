import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component'
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeachersComponent } from './teachers.component';


const routes: Routes = [
    {
        path: '',
        component: TeachersComponent,
    },
    {
        path: 'add-teacher',
        component: AddTeacherComponent
    },
    {
        path: 'get-teacher',
        component: TeacherDetailsComponent
    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TeacherRoutingModule { }