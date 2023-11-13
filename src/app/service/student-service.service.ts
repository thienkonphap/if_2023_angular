import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  private readonly APPLICATION_JSON = 'application/json';
  private readonly studentURL: string;
  private readonly option = {
    headers: this.httpHeaders
  };
  constructor(private http: HttpClient) {
    this.studentURL = 'http://localhost:52001/students';
  }
  public save(student: Student) {
    const headers = { 'content-type': 'application/json' };
    return this.http.post<Student>(this.studentURL, student,
      this.option);
  }
  private get httpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': this.APPLICATION_JSON,
      'Accept': this.APPLICATION_JSON,
      'Access-Control-Allow-Origin': "*"
    });

  }
}
