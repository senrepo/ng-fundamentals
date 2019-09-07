import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters && session.voters.filter(voter => voter !== voterName);
    }
    addVoter(session: ISession, voterName: string) {
        if (session.voters) { session.voters.push(voterName); }

    }
    userHasVoted(session: ISession, voterName: string) {
        return session.voters && session.voters.some(voter => voter === voterName);
    }
}
