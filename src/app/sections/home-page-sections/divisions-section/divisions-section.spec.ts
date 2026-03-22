import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionsSection } from './divisions-section';

describe('DivisionsSection', () => {
  let component: DivisionsSection;
  let fixture: ComponentFixture<DivisionsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
