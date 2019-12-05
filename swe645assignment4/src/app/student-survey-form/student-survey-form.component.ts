import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-survey-form',
  templateUrl: './student-survey-form.component.html',
  styleUrls: ['./student-survey-form.component.css']
})

export class StudentSurveyFormComponent implements OnInit {

   //model = new Product(1,'ProductA');

  model = new Student(123,"Gaurav", "Bahl", "123 Hello Court", "Reston", "VA", "20190", "gbahl30@gmail.com", "123-123-1223", "www.example.com", "12/02/2019", "soccer", "no comments", "very likely", "1,2,3");

  constructor (private http: HttpClient) {  }

  ngOnInit() {
    let obs = this.http.get('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student');
    obs.subscribe((response) => console.log(response));
  }
  onGet() {
    let obs = this.http.get('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student');
    obs.subscribe((response) => console.log(response));
  }
  onPost(Student) {
    // add some header
    let obs = this.http.post('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student/', Student);
    obs.subscribe((response) => console.log(response));
  }
}
