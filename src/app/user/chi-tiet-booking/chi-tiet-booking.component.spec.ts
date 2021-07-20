import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietBookingComponent } from './chi-tiet-booking.component';

describe('ChiTietBookingComponent', () => {
  let component: ChiTietBookingComponent;
  let fixture: ComponentFixture<ChiTietBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
