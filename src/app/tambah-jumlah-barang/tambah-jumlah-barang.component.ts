import { Component, OnInit, Input } from '@angular/core';
import { TransaksiBarangService } from '../services/transaksi-barang.service';
import { BarangService } from '../services/barang.service';

import { TransaksiBarang } from '../models/transaksi-barang.model';
import { Barang } from '../models/barang.model';

@Component({
  selector: 'app-tambah-jumlah-barang',
  templateUrl: './tambah-jumlah-barang.component.html',
  styleUrls: ['./tambah-jumlah-barang.component.scss']
})
export class TambahJumlahBarangComponent implements OnInit {

  public transaksiBarangList:TransaksiBarang[] = [];
  fieldTransaksiBarang:string[] = ['id_barang', 'jumlah'];
  newTransaksiBarang = new TransaksiBarang();

  public tableHeaderList:String[] = ["id_barang", "jumlah"];
  public columnToShow:String[] = ["id_barang", "jumlah"];
  public updateTransaksiBarangList:TransaksiBarang[] = [];
  public barangList:Barang[];

  constructor(private transaksiBarangService: TransaksiBarangService,
   private barangService: BarangService) { }

  ngOnInit() {
    this.get();
    this.getBarang();
  }

  getBarang(){
  	this.barangService.get().subscribe(item => {
  		this.barangList = item;
  	});
  }

  get(){
    this.transaksiBarangService.get().subscribe(item =>{
      this.transaksiBarangList = item;
    });
  }

  create(barang:TransaksiBarang){
    this.transaksiBarangService.create(barang).subscribe(res =>{
      this.get();
    // this.barangList.push(barang);
    });
  }

  update(barang:TransaksiBarang):void{
    if(this.transaksiBarangList.includes(barang)){
      if(!this.updateTransaksiBarangList.includes(barang)){
        this.updateTransaksiBarangList.push(barang);
      }
      else{
        barang.id_barang = barang.id_barang._id;
        this.transaksiBarangService.update(barang).subscribe(res => {
          this.updateTransaksiBarangList.splice(this.updateTransaksiBarangList.indexOf(barang), 1);
        });
      }
    }
  }

  delete(barang:TransaksiBarang):void{
    this.transaksiBarangService.delete(barang._id).subscribe(res => {
      this.transaksiBarangList.splice(this.transaksiBarangList.indexOf(barang), 1);
      
    });
  }

  submit(event, item:any){
    if(event.keyCode == 13){
      this.update(item);
    }
  }

}
