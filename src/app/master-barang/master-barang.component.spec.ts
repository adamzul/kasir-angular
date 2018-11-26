import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBarangComponent } from './master-barang.component';

describe('MasterBarangComponent', () => {
  let component: MasterBarangComponent;
  let fixture: ComponentFixture<MasterBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
