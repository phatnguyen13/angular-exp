import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPicker } from './station-picker';

describe('StationPicker', () => {
  let component: StationPicker;
  let fixture: ComponentFixture<StationPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
