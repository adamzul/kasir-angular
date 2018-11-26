import { Component, OnInit, Input } from '@angular/core';
import { BarangService } from '../services/barang.service';

import { Barang } from '../models/barang.model';
@Component({
  selector: 'app-master-barang',
  templateUrl: './master-barang.component.html',
  styleUrls: ['./master-barang.component.scss']
})
export class MasterBarangComponent implements OnInit {
  public barangList:Barang[] = [];
  fieldBarang:string[] = ['nama', 'deskripsi', 'jumlah'];
  newBarang = new Barang();

  public tableHeaderList:String[] = ["nama", "deskripsi", "jumlah"];
  public columnToShow:String[] = ["nama", "deskripsi", "jumlah"];
  public updateBarangList:Barang[] = [];

  constructor(private barangService: BarangService) { }

  ngOnInit() {
    this.getBarang();
  }
  getBarang(){
    this.barangService.get().subscribe(barang =>{
      this.barangList = barang;
    });
  }

  createBarang(barang:Barang){
    this.barangService.create(barang).subscribe(res =>{
      this.getBarang();
    // this.barangList.push(barang);
    });
  }

  updateBarang(barang:Barang):void{
    if(this.barangList.includes(barang)){
      if(!this.updateBarangList.includes(barang)){
        this.updateBarangList.push(barang);
      }
      else{
        this.barangService.update(barang).subscribe(res => {
          this.updateBarangList.splice(this.updateBarangList.indexOf(barang), 1);
        });
      }
    }
  }

  deleteBarang(barang:Barang):void{
    this.barangService.delete(barang._id).subscribe(res => {
      this.barangList.splice(this.barangList.indexOf(barang), 1);
      
    });
  }

  submitBarang(event, item:any){
    if(event.keyCode == 13){
      this.updateBarang(item);
    }
  }
}
