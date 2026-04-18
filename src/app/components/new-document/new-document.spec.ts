import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocument } from './new-document';

describe('NewDocument', () => {
  let component: NewDocument;
  let fixture: ComponentFixture<NewDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDocument],
    }).compileComponents();

    fixture = TestBed.createComponent(NewDocument);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
