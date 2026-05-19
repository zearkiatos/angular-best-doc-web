import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocument } from './list-document';

describe('ListDocument', () => {
  let component: ListDocument;
  let fixture: ComponentFixture<ListDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDocument],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
