import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser =  {
        id: 1,
        userName: null,
        firstName: null,
        lastName: null
    };

    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: username,
            firstName: 'John',
            lastName: 'Papa'
        };
    }

    isAuthenticated():boolean {
        return !!this.currentUser.firstName;
    }

    updateCurrentUser(firstName:string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
