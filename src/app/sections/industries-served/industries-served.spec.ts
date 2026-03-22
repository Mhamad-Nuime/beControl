import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesServed } from './industries-served';

describe('IndustriesServed', () => {
  let component: IndustriesServed;
  let fixture: ComponentFixture<IndustriesServed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesServed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesServed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
