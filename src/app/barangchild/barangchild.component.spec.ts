import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangchildComponent } from './barangchild.component';

describe('BarangchildComponent', () => {
  let component: BarangchildComponent;
  let fixture: ComponentFixture<BarangchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
