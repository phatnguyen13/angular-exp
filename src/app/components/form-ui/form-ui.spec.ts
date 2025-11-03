import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUi } from './form-ui';

describe('FormUi', () => {
  let component: FormUi;
  let fixture: ComponentFixture<FormUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
