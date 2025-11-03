import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPlay } from './communication-play';

describe('CommunicationPlay', () => {
  let component: CommunicationPlay;
  let fixture: ComponentFixture<CommunicationPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
