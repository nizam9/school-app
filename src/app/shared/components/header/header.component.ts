import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,
    private _notifier: NotifierService,) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('cleared');
    localStorage.removeItem('token');
    localStorage.removeItem("expires_at");
    this._router.navigate(['/']);
    this._notifier.notify('success' , 'Logged out')
  }

}
