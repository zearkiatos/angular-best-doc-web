import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocNews } from './best-doc-news';

describe('BestDocNews', () => {
  let component: BestDocNews;
  let fixture: ComponentFixture<BestDocNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocNews],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
