import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { MultiComponent } from './multi/multi.component';

const routes: Routes = [
    {
        path: '',
        component: SurveyComponent,
        // children: [
        //     { path: 'question', component: QuestionComponent },
        //     // { path: 'question/:name', component: QuestionComponent }
        // ]
    }
];


@NgModule({
    declarations: [SurveyComponent, QuestionComponent, MultiComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes),
    ]
})
export class SurveyModule { }
