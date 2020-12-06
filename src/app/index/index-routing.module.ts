import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeGuard } from '../shared/services/auth-guard.service';


const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        canActivate: [HomeGuard],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'students',
                loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),
                data: { name: 'student module data' }
            },
            {
                path: 'teachers',
                loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule),
                data: { name: 'teacher module data' }
            }
        ]
    }



];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class IndexRoutingModule { }