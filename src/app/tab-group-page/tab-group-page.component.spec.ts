import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupPage } from './tab-group-page.component';

describe('TabGroup', () => {
  let component: TabGroupPage;
  let fixture: ComponentFixture<TabGroupPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
