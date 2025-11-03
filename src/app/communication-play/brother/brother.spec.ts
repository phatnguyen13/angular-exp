import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brother } from './brother';

describe('Brother', () => {
  let component: Brother;
  let fixture: ComponentFixture<Brother>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brother]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brother);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
