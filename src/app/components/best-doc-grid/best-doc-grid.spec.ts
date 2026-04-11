import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocGrid } from './best-doc-grid';

describe('BestDocGrid', () => {
  let component: BestDocGrid;
  let fixture: ComponentFixture<BestDocGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
