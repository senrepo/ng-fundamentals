import { Component, NgZone } from '@angular/core';
import { AuthService } from './user/auth.service';
import { ISession } from './events';
import { EventService } from './events/shared/event-service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SearchModalComponent } from './common/search-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-fundamentals';
  searchTerm = '';
  foundsSessions: ISession[];
  modalReference?: NgbModalRef;

  constructor(private auth: AuthService, private eventService: EventService, private modalService: NgbModal, private router: Router) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }

  // searchSessions(content: any, size: any) {
  //   this.eventService.searchSessions(this.searchTerm).subscribe(sessions => {
  //     this.foundsSessions = sessions;
  //     console.log(this.foundsSessions);
  //     this.modalReference = this.modalService.open(content, { size });
  //   });
  // }

  searchSessions() {
    this.eventService.searchSessions(this.searchTerm).subscribe(sessions => {
      this.foundsSessions = sessions;
      console.log(this.foundsSessions);
      this.modalReference = this.modalService.open(SearchModalComponent);
      this.modalReference.componentInstance.items = this.foundsSessions;

      this.modalReference.result.then((sessionId) => {
        console.log(sessionId);
        this.router.navigate(['/events/' + sessionId]);

      });
    });
  }
}
