import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { NotFound } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/Survey/survey.component';
import { FormComponent } from './components/survey/form/form.component';
import { LogicComponent } from './components/survey/logic/logic.component';
import { QuestionComponent } from './components/survey/question/question.component';
import { InterstitialComponent } from './components/survey/interstitial/interstitial.component';
import { MultipleChoiceComponent } from './components/survey/multiple-choice/multiple-choice.component';

// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFound,
    HomeComponent,
    SurveyComponent,
    FormComponent,
    LogicComponent,
    MultipleChoiceComponent,
    QuestionComponent,
    InterstitialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
