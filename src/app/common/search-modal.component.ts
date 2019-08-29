import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './search-modal.component.html'
})
export class SearchModalComponent implements OnInit {
    @Input() public items: any;
    //@Output() selectedItem: EventEmitter<any> = new EventEmitter();
    currentItem: any;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit(): void { }

    passBack() {
        this.activeModal.close(this.currentItem);
    }
}
