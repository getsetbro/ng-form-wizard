import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { FormComponent } from './form/form.component';
import { LogicComponent } from './logic/logic.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { QuestionComponent } from './question/question.component';
import { InterstitialComponent } from './interstitial/interstitial.component';
import { QuizComponent } from './quiz/quiz.component';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
  declarations: [
    SurveyComponent,
    QuizComponent,
    FormComponent,
    LogicComponent,
    MultipleChoiceComponent,
    QuestionComponent,
    InterstitialComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule { }
