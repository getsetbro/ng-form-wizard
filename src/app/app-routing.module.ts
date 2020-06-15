import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/Survey/survey.component';

import { NotFound } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent, data: { state: 'home' }
  },
  {
    path: 'survey',
    // loadChildren: () => import('./components/survey/survey.module').then(m => m.SurveyModule)
    component: SurveyComponent, data: { state: 'survey' }
},
{ path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
