import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterBarangComponent} from './master-barang/master-barang.component';
import {TambahJumlahBarangComponent} from './tambah-jumlah-barang/tambah-jumlah-barang.component';

const routes:Routes = [
{path:"", component:MasterBarangComponent},
{path:"tambah-jumlah-barang", component:TambahJumlahBarangComponent}];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}