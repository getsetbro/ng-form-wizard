import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsManagerComponent } from './forms-manager/forms-manager.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormsManagerComponent
  }
];

@NgModule({
  declarations: [FormsManagerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class FormsManagerModule {}
