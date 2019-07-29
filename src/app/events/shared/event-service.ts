import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Injectable()
export class EventService {

  getEvents() {
    let subject = new Subject();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 1000);
    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }

}

const EVENTS = [
  {
    "id": 1,
    "name": "Angular Connect",
    "date": "9/26/2036",
    "time": "10am",
    "price": "100",
    "location": {
      "address": "1 London Rd",
      "city": "London",
      "country": "England"
    }
  },
  {
    "id": 2,
    "name": "C# Connect",
    "date": "4/15/2037",
    "time": "9am",
    "price": "200",
    "location": {
      "address": "127 DT ",
      "city": "Amsterdam",
      "country": "NL"
    }
  },
  {
    "id": 3,
    "name": ".NET Core Connect",
    "date": "4/15/2037",
    "time": "9am",
    "price": "300",
    "location": {
      "address": "The Palatial America Hotel",
      "city": "Salt Lake City",
      "country": "USA"
    }
  },
  {
    "id": 4,
    "name": "SQL Server Connect",
    "date": "6/10/2037",
    "time": "8am",
    "price": "400",
    "location": {
      "address": "The UN Angular Center",
      "city": "New York",
      "country": "USA"
    }
  }
]