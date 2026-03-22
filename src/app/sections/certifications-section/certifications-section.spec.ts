import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsSection } from './certifications-section';

describe('CertificationsSection', () => {
  let component: CertificationsSection;
  let fixture: ComponentFixture<CertificationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
