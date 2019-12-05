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

  model = new Student("first name", "last name", "Street Address", "City", "State", "Zip", "Email", "Telephone Number", "Date of survey", "Interests", "Recommendations", "Favorite Location");

  constructor (private http: HttpClient) {  }

  ngOnInit() {
    let obs = this.http.get('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student');
    obs.subscribe((response) => console.log(response));
  }
  onGet() {
    let obs = this.http.get('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student');
    obs.subscribe((response) => console.log(response));
  }
  onPost() {
    // add some header
    console.log(this.model);
    let obs = this.http.post('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student/', this.model);
    obs.subscribe((response) => console.log(response));
  }
}
