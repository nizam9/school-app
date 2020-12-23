import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit, OnChanges {

  @Input() studentId: any;
  @Input() closedFeePopup: string;
  @ViewChild('collapseTransactions') collapseTransactions: ElementRef;
  @ViewChild('collapseMakePayment') collapseMakePayment: ElementRef;

  isUpdateFee: boolean = false;
  feeDetails: any;
  updateFeeForm: FormGroup
  updateValidationError: string = '';


  constructor(private _studService: StudentService,
    private fb: FormBuilder,
    private _notifier: NotifierService,
  ) {
    this.createFeeForm();
  }

  ngOnInit(): void {

  }

  createFeeForm() {
    this.updateFeeForm = this.fb.group({
      donation: ['', [Validators.pattern('[0-9]+')]],
      termfee: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      amount_paid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      balance_amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      no_of_installments: ['', [Validators.pattern('[0-9]+')]],
      fees_id: ['']
    });
    this.updateFeeForm.valueChanges.subscribe((data) => {
    });
  }

  async updateFee(index) {
    this.updateValidationError = '';
    console.log(this.updateFeeForm.value.fees_id);
    if (this.updateFeeForm.valid) {
      this.isUpdateFee = false;
      const updatedData = await this._studService.updateFeesDetails(this.updateFeeForm.value.fees_id, this.updateFeeForm.value).toPromise();
      console.log(updatedData, 'updatedData');
      if (updatedData && updatedData.code === 200) {
        this.feeDetails.fee_id = updatedData.data;
        this._notifier.notify("success", updatedData.message);
      } else {
        this._notifier.notify("error", updatedData.message);
      }
    } else {
      this.updateValidationError = '*Please enter valid Numeric value';
    }
  }
  cancelUpdate() {
    this.isUpdateFee = false;
    this.updateValidationError = '';
  }

  ngOnChanges(changes: SimpleChanges): any {
    if (changes && changes.studentId && changes.studentId.currentValue) {
      this.getFeeDet(changes.studentId.currentValue);
    }
    if (changes && changes.closedFeePopup && changes.closedFeePopup.currentValue) {
      this.collapseTransactions.nativeElement.click();
      this.collapseMakePayment.nativeElement.click();
      this.updateValidationError = '';
      this.isUpdateFee = false;
    }
  }

  editFeeDetails(fee_id) {
    this.isUpdateFee = true;
  }

  async getFeeDet(studId) {
    const studentFeesDetails = await this._studService.getFeeDetails(studId).toPromise();

    if (studentFeesDetails.code === 200) {
      this.feeDetails = studentFeesDetails.data;
      this.patchFeeDetails(this.feeDetails.fee_id)
    }
  }

  patchFeeDetails(feeDetails) {
    this.updateFeeForm.patchValue({
      fees_id: feeDetails._id,
      donation: feeDetails.donation,
      termfee: feeDetails.termfee,
      amount_paid: feeDetails.amount_paid,
      balance_amount: feeDetails.balance_amount,
      no_of_installments: feeDetails.no_of_installments
    })
  }

}
