import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePicker } from './range-picker';

describe('RangePicker', () => {
  let component: RangePicker;
  let fixture: ComponentFixture<RangePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
