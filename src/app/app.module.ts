import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { NotFound } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { SurveyComponent } from './components/survey/survey.component';
import { CommonModule } from '@angular/common';
import { LogicComponent } from './components/survey/logic/logic.component';
import { FormComponent } from './components/survey/form/form.component';
import { InterstitialComponent } from './components/survey/interstitial/interstitial.component';
import { MultipleChoiceComponent } from './components/survey/multiple-choice/multiple-choice.component';
import { QuestionComponent } from './components/survey/question/question.component';
import { LiteHeaderComponent } from './components/lite-header/lite-header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFound,
    HomeComponent,
SurveyComponent,
LogicComponent,
FormComponent,
InterstitialComponent,
MultipleChoiceComponent,
QuestionComponent,
LiteHeaderComponent,
ProgressBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    environment.production ? [] : AkitaNgDevtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
