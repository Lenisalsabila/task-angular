import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangindukComponent } from './baranginduk.component';

describe('BarangindukComponent', () => {
  let component: BarangindukComponent;
  let fixture: ComponentFixture<BarangindukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangindukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangindukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
