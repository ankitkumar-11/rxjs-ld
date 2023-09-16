import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablsComponent } from './observabls/observabls.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ChatServiceComponent } from './chat-service/chat-service.component';
import { HotColdObsComponent } from './hot-cold-obs/hot-cold-obs.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { OpertorsComponent } from './opertors/opertors.component';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';
import { MapComponent } from './map/map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { SubscriptionComponent } from './subscription/subscription.component';

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
  },
  {
    path: 'callback',
    component: CallbackHellComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'join',
    component: ForkJoinComponent
  },
  {
    path:'sub',
    component:SubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
