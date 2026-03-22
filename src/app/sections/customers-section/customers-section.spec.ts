import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSection } from './customers-section';

describe('CustomersSection', () => {
  let component: CustomersSection;
  let fixture: ComponentFixture<CustomersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
