import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { SurveyComponent } from './components/survey/survey.component';
import { HomeModule } from './components/home/home.module';
import { FormsManagerModule } from './components/forms-manager/forms-manager.module';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HomeModule,
    FormsManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
