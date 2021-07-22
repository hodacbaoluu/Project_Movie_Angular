import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCinemaComplexBlockComponent } from './item-cinema-complex-block.component';

describe('ItemCinemaComplexBlockComponent', () => {
  let component: ItemCinemaComplexBlockComponent;
  let fixture: ComponentFixture<ItemCinemaComplexBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCinemaComplexBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCinemaComplexBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
