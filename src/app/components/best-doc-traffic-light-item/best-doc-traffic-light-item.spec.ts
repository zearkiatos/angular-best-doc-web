import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocTrafficLightItem } from './best-doc-traffic-light-item';

describe('BestDocTrafficLightItem', () => {
  let component: BestDocTrafficLightItem;
  let fixture: ComponentFixture<BestDocTrafficLightItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocTrafficLightItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocTrafficLightItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
