import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahJumlahBarangComponent } from './tambah-jumlah-barang.component';

describe('TambahJumlahBarangComponent', () => {
  let component: TambahJumlahBarangComponent;
  let fixture: ComponentFixture<TambahJumlahBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahJumlahBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahJumlahBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
