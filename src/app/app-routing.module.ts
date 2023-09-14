import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablsComponent } from './observabls/observabls.component';

const routes: Routes = [

  {
    path: 'observables',
    component: ObservablsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
