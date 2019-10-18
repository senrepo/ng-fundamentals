import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
// import { UpvoteComponent } from './upvote.component';
// import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { DurationPipe } from '../shared/duration.pipe';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

//try with "ng test --sourcemaps=false" if its giving strange errors

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'joe' }
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                //UpvoteComponent,
                //CollapsibleWellComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA //shallow test
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id: 1,
                    name: 'Using Angular 4 Pipes',
                    presenter: 'Peter Bacon Darwin',
                    duration: 1,
                    level: 'Intermediate',
                    abstract: 'Learn all about the new pipes in Angular 4',
                    voters: ['bradgreen', 'igorminar', 'martinfowler']
                }];
            component.filterBy = 'all';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            //expect(element.querySelector('[well-title]').textContent).toContain('Angular');
            expect(debugElement.query(By.css('[well-title')).nativeElement.textContent).toContain('Angular'); //other option
        });
    });

});
