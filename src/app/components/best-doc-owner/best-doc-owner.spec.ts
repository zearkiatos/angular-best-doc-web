import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDocOwner } from './best-doc-owner';

describe('BestDocOwner', () => {
  let component: BestDocOwner;
  let fixture: ComponentFixture<BestDocOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDocOwner],
    }).compileComponents();

    fixture = TestBed.createComponent(BestDocOwner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
