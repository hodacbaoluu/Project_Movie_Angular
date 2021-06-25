import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhimComponent } from './carousel-phim.component';

describe('CarouselPhimComponent', () => {
  let component: CarouselPhimComponent;
  let fixture: ComponentFixture<CarouselPhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPhimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
