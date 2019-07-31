import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { IEvent } from './event.model';

@Injectable()
export class EventService {

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 1000);
    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }

}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect',
    date: new Date('9/26/2036'),
    time: '10am',
    price: 100,
    location: {
      address: '1 London Rd',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 2,
    name: 'C# Connect',
    date: new Date('4/15/2037'),
    time: '9am',
    price: 200,
    location: {
      address: '127 DT ',
      city: 'Amsterdam',
      country: 'NL'
    }
  },
  {
    id: 3,
    name: '.NET Core Connect',
    date: new Date('4/15/2037'),
    time: '9am',
    price: 300,
    location: {
      address: 'The Palatial America Hotel',
      city: 'Salt Lake City',
      country: 'USA'
    }
  },
  {
    id: 4,
    name: 'SQL Server Connect',
    date: new Date('6/10/2037'),
    time: '8am',
    price: 400,
    location: {
      address: 'The UN Angular Center',
      city: 'New York',
      country: 'USA'
    }
  }
];
