import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './nav/routes';
import { NavBarComponent } from './nav/navbar.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent, EventsListComponent, EventThumbnailComponent, 
    EventDetailsComponent, NavBarComponent, CreateEventComponent, Error404Component
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
