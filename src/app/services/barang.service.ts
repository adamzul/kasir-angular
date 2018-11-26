import Barang from '../models/barang.model';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable()
export class BarangService{
	api_url = 'http://localhost:3000';
	barangUrl = `${this.api_url}/api/barang`;

	constructor(private http:HttpClient){}

	create(barang: Barang):Observable<any>{
		return this.http.post(this.barangUrl, barang);
	}

	get():Observable<Barang[]>{
		return this.http.get(this.barangUrl).pipe(map(res =>{
			return res['data'].docs as Barang[];
		}));
	}

	update(barang: Barang){
		let editUrl = `${this.barangUrl}`;
		return this.http.put(editUrl, barang);
	}

	delete(id:string){
		return this.http.delete(`${this.barangUrl}/${id}`);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}