import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocFooter } from './best-doc-footer';

describe('BestDocFooter', () => {
  let component: BestDocFooter;
  let fixture: ComponentFixture<BestDocFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
