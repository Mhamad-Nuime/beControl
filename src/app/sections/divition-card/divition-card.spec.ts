import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivitionCard } from './divition-card';

describe('DivitionCard', () => {
  let component: DivitionCard;
  let fixture: ComponentFixture<DivitionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivitionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivitionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
