import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';


@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html',
    styles: ['a { cursor: pointer }']
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;

    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService:VoterService) { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }

    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
    }

    userHasVoted(session: ISession) {
       return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }


}
