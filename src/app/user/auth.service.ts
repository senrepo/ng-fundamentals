import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthService {

    currentUser: IUser =  {
        id: 1,
        userName: null,
        firstName: null,
        lastName: null
    };

    constructor(private http: HttpClient) {

    }

    loginUser(username: string, password: string) {
        // this.currentUser = {
        //     id: 1,
        //     userName: username,
        //     firstName: 'John',
        //     lastName: 'Papa'
        // };

        //johnpapa is the valid user and password doesn't matter
        return this.http.post('/api/login', { username, password}, { headers : new HttpHeaders({'Content-Type': 'application/json'})})
            .pipe(tap( data => {
            this.currentUser = data['user'] as IUser;
        })).pipe(catchError(err => {
            return of(false);
        }));
    }

    isAuthenticated(): boolean {
        return !! (this.currentUser && this.currentUser.firstName);
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
            if(data) this.currentUser = <IUser> data;
        })).subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        this.currentUser.userName = firstName;
    }

    logout() {
        this.currentUser = undefined;
        return this.http.post('/api/logout', { }, { headers : new HttpHeaders({'Content-Type': 'application/json'})});
    }
}
