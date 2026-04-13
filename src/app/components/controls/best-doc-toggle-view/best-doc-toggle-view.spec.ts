import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocToggleView } from './best-doc-toggle-view';

describe('BestDocToggleView', () => {
  let component: BestDocToggleView;
  let fixture: ComponentFixture<BestDocToggleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocToggleView],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocToggleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
