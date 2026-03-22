import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersSection } from './partners-section';

describe('PartnersSection', () => {
  let component: PartnersSection;
  let fixture: ComponentFixture<PartnersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
