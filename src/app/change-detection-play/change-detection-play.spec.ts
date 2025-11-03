import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPlay } from './change-detection-play';

describe('ChangeDetectionPlay', () => {
  let component: ChangeDetectionPlay;
  let fixture: ComponentFixture<ChangeDetectionPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
