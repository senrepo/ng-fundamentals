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

  saveEvent(event) {
    event.id = 999;
    EVENTS.push(event);
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id);
    EVENTS[index] = event;
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
    },
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter Bacon Darwin',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Learn all about the new pipes in Angular 4',
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: 'Getting the most out of your dev team',
        presenter: 'Jeff Cross',
        duration: 1,
        level: 'Intermediate',
        abstract: 'We all know that our dev teams work hard, but with'
      },
      {
        id: 3,
        name: 'Angular 4 Performance Metrics',
        presenter: 'Rob Wormald',
        duration: 2,
        level: 'Advanced',
        abstract: 'Angular 4 Performance is hot. In this session',
        voters: []
      },
      {
        id: 4,
        name: 'Angular 5 Look Ahead',
        presenter: 'Brad Green',
        duration: 2,
        level: 'Advanced',
        abstract: 'Even though Angular 5 is still 6 years away, we all want',
        voters: []
      },
      {
        id: 5,
        name: 'Basics of Angular 4',
        presenter: 'John Papa',
        duration: 2,
        level: 'Beginner',
        abstract: 'It time to learn the basics of Angular 4. This talk',
        voters: ['bradgreen', 'igorminar']
      }
    ]
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
