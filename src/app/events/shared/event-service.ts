import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { IEvent, ISession } from './event.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) {

  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>("/api/events")
    .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    // return (error: any): Observable<T> => {
    //   console.log(error);
    //   return of(result as T);
    // }
    return function(error:any): Observable<T> {
      console.log(error);
      return of(result as T);
    }
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }


  saveEvent(event) {
    event.id = 999;
    EVENTS.push(event);
  }

  updateEvent(event) {
    const index = EVENTS.findIndex(x => x.id = event.id);
    EVENTS[index] = event;
  }

  searchSessions(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();
    var results: ISession[] = [];

    EVENTS.forEach(event => {
      var matchingSessions = event.sessions && event.sessions.filter(session => {
        return session.name.toLocaleLowerCase().indexOf(term) > -1
      });
      matchingSessions = matchingSessions && matchingSessions.map((session: any) => {
        session.eventId = event.id;
        return session;
      });
      results = matchingSessions && matchingSessions.length > 1 ? results.concat(matchingSessions) : results;
    });

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
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
    },
    sessions: [
      {
        id: 1,
        name: 'C# deep dive',
        presenter: 'Peter Bacon Darwin',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Learn all about the new pipes in Angular 4',
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: 'C# Demystified',
        presenter: 'Peter Bacon Darwin',
        duration: 1,
        level: 'Intermediate',
        abstract: 'Learn all about the new pipes in Angular 4',
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
    ]
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
