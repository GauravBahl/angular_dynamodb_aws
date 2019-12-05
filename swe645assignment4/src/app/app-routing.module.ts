import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentSurveyFormComponent } from './student-survey-form/student-survey-form.component';
import { StudentSurveyListComponent } from './student-survey-list/student-survey-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student-survey-form', component: StudentSurveyFormComponent },
  { path: 'student-surveys', component: StudentSurveyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
