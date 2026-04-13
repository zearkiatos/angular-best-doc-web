import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocTrafficLight } from './best-doc-traffic-light';

describe('BestDocTrafficLight', () => {
  let component: BestDocTrafficLight;
  let fixture: ComponentFixture<BestDocTrafficLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocTrafficLight],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocTrafficLight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
