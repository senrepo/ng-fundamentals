import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];


  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  handleReservation(data) {
    console.log('received ' + data);
  }

  ngOnInit() {

    // this.eventService.getEvents().subscribe(events=> {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data.events;
  }
}
