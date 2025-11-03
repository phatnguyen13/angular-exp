import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSimulate } from './store-simulate';

describe('StoreSimulate', () => {
  let component: StoreSimulate;
  let fixture: ComponentFixture<StoreSimulate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSimulate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSimulate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
