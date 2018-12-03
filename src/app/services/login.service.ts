import User from '../models/user.model';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable()
export class LoginService{
	api_url = 'http://localhost:3000';
	url = `${this.api_url}/api/auth`;
	// public user:User;

	constructor(private http:HttpClient){}

	login(user: User):Observable<any>{
		return this.http.post(`${this.url}/login`, user);
		
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	  }
}