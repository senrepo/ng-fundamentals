import { Component } from '@angular/core';

@Component({
  selector : 'events-list',
  templateUrl : './events-list.component.html'
})
export class EventsListComponent {
  eventDetails = {
    id : 1,
    name: 'Angular Connect',
    date: '09/26/2019',
    price: 599.99
  }

  handleReservation(data) {
      console.log('received ' + data);
  }
}