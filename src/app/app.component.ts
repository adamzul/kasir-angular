import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { BarangService } from './services/barang.service';

import { Barang } from './models/barang.model';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit{
  title = 'penjualan-angular';
  logedIn:boolean;
  constructor(){}

  ngOnInit():void{
  	this.logedIn = (localStorage.getItem('jwtToken') != null);
  }

  
}

