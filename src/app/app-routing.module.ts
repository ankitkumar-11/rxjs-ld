import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablsComponent } from './observabls/observabls.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';

const routes: Routes = [

  {
    path: 'observables',
    component: ObservablsComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'mess',
    component: ChatServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
