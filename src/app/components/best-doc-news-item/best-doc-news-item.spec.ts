import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocNewsItem } from './best-doc-news-item';

describe('BestDocNewsItem', () => {
  let component: BestDocNewsItem;
  let fixture: ComponentFixture<BestDocNewsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocNewsItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocNewsItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
