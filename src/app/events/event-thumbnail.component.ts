import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
        <div> {{event.name}} </div>
        <div>Date: {{event.date}} </div>
        <div>Price: \${{ event.price }} </div>
    </div>
    <button (click)="handleReservation()"> Reserve </button>
    <br/> <br/>
    `
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventReserveClick = new EventEmitter();

    handleReservation() {
        this.eventReserveClick.emit(this.event.name);
    }
}
