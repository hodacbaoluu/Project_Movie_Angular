import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaComplexBlockComponent } from './cinema-complex-block.component';

describe('CinemaComplexBlockComponent', () => {
  let component: CinemaComplexBlockComponent;
  let fixture: ComponentFixture<CinemaComplexBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaComplexBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaComplexBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
