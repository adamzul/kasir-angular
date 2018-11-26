import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';

import {BarangService} from './services/barang.service';
import {TransaksiBarangService} from './services/transaksi-barang.service';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MasterBarangComponent } from './master-barang/master-barang.component';
import { TambahJumlahBarangComponent } from './tambah-jumlah-barang/tambah-jumlah-barang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidebarComponent,
    MasterBarangComponent,
    TambahJumlahBarangComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [BarangService, TransaksiBarangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
