import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em: { float: right; color: red; padding-left: 10px; }
    .error input { background-color: #E3C3E5; }
    .error :: -webkit-input-placeholder { color: #999  }
  `
    ]
})
export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    event: any;

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit(): void {
        this.event = {
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

        }
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            console.log(formValues);
            this.router.navigate(['/events']);
        });

    }
}
