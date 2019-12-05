import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-survey-form',
  templateUrl: './student-survey-form.component.html',
  styleUrls: ['./student-survey-form.component.css']
})

export class StudentSurveyFormComponent implements OnInit {

  options = ['Likely', 'Very Likely', 'UnLikely'];

  logs = "";

  emails = [{ email: "students" }, { email: "location" },
  { email: "campus" }, { email: 'atmosphere' },
  { email: 'dormrooms' }, { email: 'sports' }];

  myForm: FormGroup;

  model = new Student("first name", "last name", "Street Address", "City",
   "State", "Zip", "Email", "Telephone Number", "Date of survey",
    this.logs,
    this.options[0],
    "Friends, TV");

  constructor (private http: HttpClient, private fb: FormBuilder) {  }

  ngOnInit() {
    this.myForm = this.fb.group({
     useremail: this.fb.array([])
   });
  }

  onPost() {
    console.log(this.model);
    let obs = this.http.post('https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/student/', this.model);
    obs.subscribe((response) => this.onSubmitAlert());
  }

  onSubmitAlert(){
    alert('Form Submitted !');
  }

  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }

    this.logs = emailFormArray.value.toString();
    console.log('String values = '+this.logs);
  }

}
