import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _notifier:NotifierService) { }

  ngOnInit(): void {
    // this._notifier.notify("success" , 'logged in');
  }

}
