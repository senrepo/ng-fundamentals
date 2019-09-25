import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em: { float: right; color: red; padding-left: 10px; }
    .error input { background-color: #E3C3E5; }
    .error :: -webkit-input-placeholder { color: #999  }
  `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  loginInvalid = false;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser && this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser && this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      //this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.authService.loginUser(formValues.firstName, formValues.lastName).subscribe(response=> {
        if(!response) {
          this.loginInvalid = true;
        }else {
          this.router.navigate(['/events']);
          this.loginInvalid = false;
        }
      });
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
