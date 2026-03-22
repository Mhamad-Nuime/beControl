import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesServedCard } from './industries-served-card';

describe('IndustriesServedCard', () => {
  let component: IndustriesServedCard;
  let fixture: ComponentFixture<IndustriesServedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesServedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesServedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
