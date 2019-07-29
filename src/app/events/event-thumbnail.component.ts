import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() event: any;
    @Output() eventReserveClick = new EventEmitter();

    handleReservation() {
        this.eventReserveClick.emit(this.event.name);
    }
}