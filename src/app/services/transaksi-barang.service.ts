import TransaksiBarang from '../models/transaksi-barang.model';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable()
export class TransaksiBarangService{
	api_url = 'http://localhost:3000';
	url = `${this.api_url}/api/transaksi-barang`;

	constructor(private http:HttpClient){}

	create(transaksiBarang: TransaksiBarang):Observable<any>{
		return this.http.post(this.url, transaksiBarang);
	}

	get():Observable<TransaksiBarang[]>{
		return this.http.get(this.url).pipe(map(res =>{
			return res['data'].docs as TransaksiBarang[];
		}));
	}

	update(barang: TransaksiBarang){
		let editUrl = `${this.url}`;
		return this.http.put(editUrl, barang);
	}

	delete(id:string){
		return this.http.delete(`${this.url}/${id}`);
	}

	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}