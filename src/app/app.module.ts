import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/Survey/survey.component';
import { HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityServiceGlobalConfig } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    AkitaNgRouterStoreModule,
    environment.production ? [] : AkitaNgDevtools,
  ],
  providers: [
    // AuthGuard,
    // {provide: NG_ENTITY_SERVICE_CONFIG,
    //   useFactory: function() {
    //     return {
    //       baseUrl: 'https://jsonplaceholder.typicode.com',
    //       httpMethods: {PUT: HttpMethod.PATCH}
    //     } as NgEntityServiceGlobalConfig;
    //   },
    //   deps: []
   // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
