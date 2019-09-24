import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
// import { EventsListComponent } from './events/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail.component';
// import { CreateEventComponent } from './events/create-event.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './errors/404.component';

// import { EventService } from './events/shared/event-service';
// import { EventRouteActivator } from './events/event-details/event-route.activator.service';

import { appRoutes } from './routes';
//import { EventListResolver } from './events/events-list.resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  CreateSessionComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import { AuthService } from './user/auth.service';
import { SearchModalComponent } from './common/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SearchModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', useValue: CheckDirtyState
    },
    EventListResolver,
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SearchModalComponent]
})
export class AppModule { }

export function CheckDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
