import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Student } from '../model/Students';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-student-requester',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-requester.component.html',
  styleUrl: './student-requester.component.css'
})
export class StudentRequesterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  studentToBeCreated: Student | any;

  constructor(private readonly httpClient: HttpClient,
    private readonly studentService: StudentServiceService,
    private router: Router) { }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted = true;
      this.studentToBeCreated = this.form.value;
      this.studentService.save(this.studentToBeCreated).subscribe(res => {
        this.router.navigate(['/students']);
      });
    }
  }

  loadForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl(''),
      age: new FormControl('', Validators.required),
      dateExchange: new FormControl(new Date()),
    });
  }
  ngOnInit(): void {
    this.loadForm();
    console.log(this.form)
    console.log(this.form.controls['email'])
    console.log('Your form data : ', this.form.value);
  }
  get f() { return this.form.controls; }
}
