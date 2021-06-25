import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAppComponent } from './block-app.component';

describe('BlockAppComponent', () => {
  let component: BlockAppComponent;
  let fixture: ComponentFixture<BlockAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
