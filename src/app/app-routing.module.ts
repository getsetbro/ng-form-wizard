import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFound } from './components/notfound/notfound.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'survey',
    loadChildren: () => import('./components/survey/survey.module').then(m => m.SurveyModule)
    // component: SurveyComponent
    // , data: { state: 'survey' }
  },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
