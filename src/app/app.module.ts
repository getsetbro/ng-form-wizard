import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { NotFound } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyModule } from './components/survey/survey.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFound,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    // SurveyModule,
    environment.production ? [] : AkitaNgDevtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
