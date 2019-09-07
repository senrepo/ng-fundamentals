import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {
    @Input() count: number;
    
    private _voted: boolean;
    @Input() set voted(val) {
        this._voted = val;
        this.iconColor = val ? 'red' : 'black';
    }
    get voted(): boolean {
        return this._voted;
    }

    @Output() vote = new EventEmitter();
    iconColor: string;

    constructor() { }

    ngOnInit(): void { }

    onClick() {
        this.vote.emit({});
    }
}
