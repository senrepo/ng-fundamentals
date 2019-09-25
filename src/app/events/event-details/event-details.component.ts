import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession, IEvent } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: ['a { cursor: pointer }']
})
export class EventDetailsComponent implements OnInit {
    event: any;
    addMode = false;
    filterBy = 'all';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
           this.eventService.getEvent(+params.id).subscribe((event: IEvent)=> {
                this.event = event;
                this.addMode = false;
            });
        });
        //this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe(() => {
            this.addMode = false;
        });

    }

    cancelAddSession() {
        this.addMode = false;
    }
}
