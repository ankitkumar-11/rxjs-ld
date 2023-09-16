import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablsComponent } from './observabls/observabls.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';
import { HelloTextComponent } from './subjects/hello-text/hello-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatServiceComponent } from './chat-service/chat-service.component';
import { AComponent } from './chat-service/a/a.component';
import { BComponent } from './chat-service/b/b.component';
import { CComponent } from './chat-service/c/c.component';
import { HotColdObsComponent } from './hot-cold-obs/hot-cold-obs.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { OpertorsComponent } from './opertors/opertors.component';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';
import { MapComponent } from './map/map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablsComponent,
    SubjectsComponent,
    HelloTextComponent,
    ChatServiceComponent,
    AComponent,
    BComponent,
    CComponent,
    HotColdObsComponent,
    XComponent,
    YComponent,
    OpertorsComponent,
    CallbackHellComponent,
    MapComponent,
    ForkJoinComponent,
    SchedulerComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
