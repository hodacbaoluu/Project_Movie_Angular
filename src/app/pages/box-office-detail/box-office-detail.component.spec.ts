import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOfficeDetailComponent } from './box-office-detail.component';

describe('BoxOfficeDetailComponent', () => {
  let component: BoxOfficeDetailComponent;
  let fixture: ComponentFixture<BoxOfficeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOfficeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOfficeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
