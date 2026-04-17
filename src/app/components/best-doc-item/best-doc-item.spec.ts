import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocItem } from './best-doc-item';

describe('BestDocItem', () => {
  let component: BestDocItem;
  let fixture: ComponentFixture<BestDocItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
