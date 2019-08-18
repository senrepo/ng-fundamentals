import { Component, OnInit, Input } from '@angular/core';
import { ISession } from "../shared/event.model";

@Component({
    selector: 'sessions-list',
    templateUrl: './session-list.component.html',
    styles: ['a { cursor: pointer }']
})
export class SessionListComponent implements OnInit {
    @Input() sessions: ISession[];
    constructor() { }

    ngOnInit(): void { }
}
