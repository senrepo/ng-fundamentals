import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedWords } from '../shared/index';


@Component({
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
    newSessionForm: FormGroup;
    name: FormControl;
    abstract: FormControl;

    constructor() { }

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400),
        restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            abstract: this.abstract
        });
    }


    saveSession(formValues) {
        console.log(formValues);
    }

    // use the interact to pass the data to the service to save it
    // let session: ISession = {
    //     name: formValues.name,
    //     abstract: formValues.abstract
    // }
}

