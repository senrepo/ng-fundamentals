import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';
import { SystemJsNgModuleLoaderConfig } from '@angular/core';

describe('test suite', () => {
    let voterService: VoterService;
    let mockHttp;


    beforeAll(() => {

    });

    beforeEach(() => {

        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove voter from list of voters', () => {

            let session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(of(false));
            voterService.deleteVoter(3, session as ISession, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the right URL', () => {
            let session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, session as ISession, 'joe');
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });

    describe('deleteVoter', () => {
        it('should call http.post with the right URL', () => {
            let session = { id: 6, voters: ['john'] };
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, session as ISession, 'joe');
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
        });
    });


    afterEach(() => {

    });

    afterAll(() => {

    });
});