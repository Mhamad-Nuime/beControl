import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectsSection } from './our-projects-section';

describe('OurProjectsSection', () => {
  let component: OurProjectsSection;
  let fixture: ComponentFixture<OurProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProjectsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProjectsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
