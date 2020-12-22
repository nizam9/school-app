import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { FormFields } from 'src/app/shared/custom/validations/formFields';
import { ValidationMessages } from 'src/app/shared/custom/validations/validation-messages';
import { CustomValidations } from 'src/app/shared/custom/validations/validations';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  registerForm: FormGroup
  registerFormFields = FormFields.studentRegisterForm;
  registerValidationMessages = ValidationMessages.studentRegisterMessages;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _customValidation: CustomValidations,
    private _notifier: NotifierService,
    private _studentService: StudentService
  ) {
    this.createRegisterForm();
  }

  ngOnInit(): void {
   
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstname: ['', []],
      lastname: ['', []],
      middlename: [''],
      rollNumber: [''],
      gender: ['', []],
      dob: ['', []],
      age: [''],
      class: [''],
      section: [''],
      joining_date: ['', []],
      fathername: ['', []],
      mothername: ['', []],
      father_email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mother_email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      father_mobile: ['', [, Validators.pattern('[6-9]\\d{9}')]],
      mother_mobile: ['', [Validators.pattern('[6-9]\\d{9}')]],
      father_occupation: ['', []],
      mother_occupation: [''],
      gaurdian: [''],
      address: ['', []],
      aadhar: ['', []],
      disability: [''],
      donation: [''],
      termfee: ['', []],
      amount_paid: ['', []],
      balance_amount: ['', []],
      no_of_installments: [''],
    });
    this.registerForm.valueChanges.subscribe((data) => {
      this._customValidation.validate(data, this.registerForm, this.registerFormFields, this.registerValidationMessages)
    });
  }

  register() {
    console.log(this.registerForm.value, 'this.registerForm', this.registerForm.valid);
    let saveFeeDetails = false;
    if (this.registerForm.valid) {

      if (this.registerForm.get('donation').value ||
        this.registerForm.get('termfee').value ||
        this.registerForm.get('amount_paid').value ||
        this.registerForm.get('balance_amount').value ||
        this.registerForm.get('no_of_installments').value) {
        saveFeeDetails = true;
      }
      console.log('valid');
      this._studentService.registerStudent(this.registerForm.value).subscribe((res) => {
        console.log(res, res.data, res.data._id, '---------------------------')
        if (saveFeeDetails) {
          const feeStructureDet = {
            donation: this.registerForm.get('donation').value,
            termfee: this.registerForm.get('termfee').value,
            amount_paid: this.registerForm.get('amount_paid').value,
            balance_amount: this.registerForm.get('balance_amount').value,
            no_of_installments: this.registerForm.get('no_of_installments').value,
            student_id: res.data._id
          }
          this.addStudentFee(feeStructureDet);
        }
        if (res.code == 200) {
          this._notifier.notify("success", res.message);
        }
      }, (err) => {
        console.log('error', err);
        this._notifier.notify("error", err.message);
      })
    } else {
      this._customValidation.validateAllFormFields(this.registerForm, this.registerFormFields, this.registerValidationMessages);
    }
  }

  addStudentFee(feeStructureDet) {
    console.log(feeStructureDet, 'feeStructureDet');
    this._studentService.addStudentFee(feeStructureDet).subscribe((feeRes) => {
      if (feeRes && feeRes.code === 200) {
        this._notifier.notify("success", feeRes.message);
      }
    }, (error) => {
      console.log(error, 'errrrrrrrrrrorr');
      this._notifier.notify("error", error.message);
    })
  }

}
