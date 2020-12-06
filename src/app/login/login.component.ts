import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { NotifierService } from "angular-notifier";
import { FormFields } from '../shared/custom/validations/formFields';
import { ValidationMessages } from '../shared/custom/validations/login-validation-messages';
import { CustomValidations } from '../shared/custom/validations/validations';
import { AuthService } from '../shared/services/auth.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormFields = FormFields.loginForm;
  loginValidationMessages = ValidationMessages.loginMessages;


  constructor(private _loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private _customValidation: CustomValidations,
    private _notifier: NotifierService,
    private _authService: AuthService
  ) {
    this.createLoginForm();
  }
  public isUserSessionValid;

  ngOnInit(): void {
    this.isUserSessionValid = this._authService.isLoggedIn();
    if (this.isUserSessionValid) {
      this.router.navigate(['/index'])
    }
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    });
    this.loginForm.valueChanges.subscribe((data) => {
      this._customValidation.validate(data, this.loginForm, this.loginFormFields, this.loginValidationMessages)
    });
  }

  login() {
    console.log(this.loginForm, 'this.loginForm')
    if (this.loginForm.valid) {
      const loginObj = {
        email: String(this.loginForm.get('email').value),
        password: String(this.loginForm.get('password').value)
      };
      console.log(loginObj, 'loginObj');
      this._loginService.login(loginObj).subscribe((res) => {
        console.log(res);
        if (res.code === 200) {
          this._notifier.notify("success", res.message);
          this._authService.setSession(res.user)
          this.router.navigate(['/index']);
        } else {
          this._notifier.notify("error", res.message);
        }
      })
    } else {
      this._customValidation.validateAllFormFields(this.loginForm, this.loginFormFields, this.loginValidationMessages);
    }
  }












}
