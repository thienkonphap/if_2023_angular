import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Students';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
  constructor(private readonly httpClient: HttpClient) { }
  private URL_STUDENT = 'http://localhost:52001';
  studentList: Student[] | any;

  getAllStudents(): Observable<Student[]> {
    const url = `${this.URL_STUDENT}/students`;
    return this.httpClient.get<Student[]>(url);
  }
  ngOnInit(): void {
    this.getAllStudents()
      .pipe()
      .subscribe(value => {
        this.studentList = value;
      });
  }
}
