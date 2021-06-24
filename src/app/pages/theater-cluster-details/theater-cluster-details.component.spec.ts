import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterClusterDetailsComponent } from './theater-cluster-details.component';

describe('TheaterClusterDetailsComponent', () => {
  let component: TheaterClusterDetailsComponent;
  let fixture: ComponentFixture<TheaterClusterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterClusterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterClusterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
