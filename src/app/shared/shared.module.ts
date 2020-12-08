import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule, Routes, RouterStateSnapshot } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, SidenavComponent]
})
export class SharedModule { }
