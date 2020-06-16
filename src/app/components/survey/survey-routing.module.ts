import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
import { SurveyComponent } from './survey.component';

const routes: Routes = [
  {
    path: '', component: SurveyComponent, data: { state: 'survey' },
    children: [
      { path: 'quiz1', component: QuizComponent },
      { path: 'quiz2', component: QuizComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
