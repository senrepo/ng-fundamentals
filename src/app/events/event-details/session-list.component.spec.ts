import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent suite', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeAll(() => {

    });

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {

        it('should filter the sessions correctly', () => {
            component.sessions = [{ name: 'session 1', level: 'intermediate' },
            { name: 'session 2', level: 'intermediate' },
            { name: 'session 3', level: 'beginner' }] as ISession[];
            component.filterBy = 'intermediate';

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);

        });
    });


    afterEach(() => {

    });

    afterAll(() => {

    });
});