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
  public newBarang = new Barang();
  public tesBarang:Barang[] = [{_id:"1212",nama:"sikat gigi", deskripsi:"sikat gigi", jumlah:10}]; 
  barangsList: Barang[];
  updateBarangs: Barang[] = [];

  constructor(private barangService:BarangService){}

  ngOnInit():void{
  	
  }

  
}

