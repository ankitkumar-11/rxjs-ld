import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablsComponent } from './observabls/observabls.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';
import { HotColdObsComponent } from './hot-cold-obs/hot-cold-obs.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { OpertorsComponent } from './opertors/opertors.component';

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
  },
  {
    path: 'hot-and-cold-obs',
    component: HotColdObsComponent
  },
  {
    path: 'xcom',
    component: XComponent
  },
  {
    path: 'ycom',
    component: YComponent
  },
  {
    path: 'opeartors',
    component: OpertorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
