import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component'
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';


const routes: Routes = [
    {
        path: '',
        component: StudentsComponent,
    },
    {
        path: 'add-student',
        component: AddStudentComponent
    },
    {
        path: 'get-student',
        component: StudentDetailsComponent
    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StudentRoutingModule { }