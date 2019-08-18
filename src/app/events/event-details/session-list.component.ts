import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from "../shared/event.model";

@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html',
    styles: ['a { cursor: pointer }']
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;

    visibleSessions: ISession[] = [];

    constructor() { }

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter: string) {
        if(filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session=> {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
    

}
