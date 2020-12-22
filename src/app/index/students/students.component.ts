import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { StudentService } from './student.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @ViewChild('addStududentPopup') addStududentPopup: ElementRef;
  @ViewChild('feeDetailsPopup') feeDetailsPopup: ElementRef;


  isAddStudVismceible: boolean = false;
  searchValue: Subject<string> = new Subject<string>();

  studentsList: any = [];
  studentsFetchError: any;
  searchModel: string;
  defaultStudentsList: string;
  isFeeDetailsVisible: boolean;
  studentId: any;
  closedFeePopup = 0;

  constructor(
    private _notifier: NotifierService,
    private _studentService: StudentService) {
    this.searchValue.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((key) => {
      if (key) {
        const term = key.toLowerCase();
        this.studentsList = this.defaultStudentsList;
        let temp = this.studentsList.filter((el) => {
          return el.firstname.toLowerCase().indexOf(term) !== -1 ||
            el.lastname.toLowerCase().indexOf(term) !== -1 ||
            el.rollNumber.toLowerCase().indexOf(term) !== -1 ||
            el.aadhar.toLowerCase().indexOf(term) !== -1 ||
            el.mothername.toLowerCase().indexOf(term) !== -1 ||
            el.fathername.toLowerCase().indexOf(term) !== -1
        });
        this.studentsList = temp;
      } else {
        this.studentsList = this.defaultStudentsList;
      }
    })
  }

  ngOnInit(): void {
    this.getStudentsList(300);
  }

  studentSearch(e) {
    this.searchValue.next(e);

  }

  openPopup(event, student_id?) {
    if (event === 'addnewStud') {
      this.addStududentPopup.nativeElement.click();
      this.isAddStudVismceible = true;
    } else if (event === 'feeDetails') {
      this.feeDetailsPopup.nativeElement.click();
      this.studentId = student_id;
      this.isFeeDetailsVisible = true;
    }

  }

  closeFeePopup() {
    this.closedFeePopup = Math.random(); // passing same value always will not trigger ngOnChanges
  }


  addnewStud() {

  }

  async getStudentsList(limit) {
    const students = await this._studentService.getStudentsList(limit).toPromise();
    if (students.code === 200) {
      this.studentsList = students.data;
      this.defaultStudentsList = JSON.parse(JSON.stringify(students.data));
    } else {
      this.studentsFetchError = students.message;
    }

  }



}
