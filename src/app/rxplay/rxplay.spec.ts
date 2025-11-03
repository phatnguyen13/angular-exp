import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxplay } from './rxplay';

describe('Rxplay', () => {
  let component: Rxplay;
  let fixture: ComponentFixture<Rxplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
