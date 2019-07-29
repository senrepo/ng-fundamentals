import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
     <h4> New Event </h4>
     <div>
        Create event form will go here
        <br/>
        <br/>

        <button type="submit"> Save </button> &nbsp;  &nbsp;  &nbsp;
        <button type="button" (click)="cancel()"> Cancel </button>
     </div>
    `

})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
