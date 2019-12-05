import { Component, OnInit } from '@angular/core';
import { Student } from './student';


@Component({
  selector: 'app-student-survey-form',
  templateUrl: './student-survey-form.component.html',
  styleUrls: ['./student-survey-form.component.css']
})

export class StudentSurveyFormComponent implements OnInit {

   //model = new Product(1,'ProductA');

  model = new Student();

  constructor () {  }

  ngOnInit() {
    console.log('Hello World')
  }

}
