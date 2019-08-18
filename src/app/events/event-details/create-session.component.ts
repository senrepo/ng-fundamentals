import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedWords, ISession } from '../shared/index';


@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em: { float: right; color: red; padding-left: 10px; }
    .error input { background-color: #E3C3E5; }
    .error textarea { background-color: #E3C3E5; }
    .error :: -webkit-input-placeholder { color: #999  }
  `
    ]
})
export class CreateSessionComponent implements OnInit {
    @Output() SaveNewSession = new EventEmitter();
    @Output() CancelAddSesion = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor() { }

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.duration = new FormControl();
        this.level = new FormControl();
        this.presenter = new FormControl();
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400),
        restrictedWords(['foo', 'bar'])]);


        this.newSessionForm = new FormGroup({
            name: this.name,
            duration: this.duration,
            level: this.level,
            presenter: this.presenter,
            abstract: this.abstract
        });
    }


    saveSession(formValues) {
        let session: ISession = {
            id : undefined,
            name: formValues.name,
            duration: formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.SaveNewSession.emit(session);
    }

    cancel() {
        this.CancelAddSesion.emit();
    }

}

