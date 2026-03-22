import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWritedParagraph } from './auto-writed-paragraph';

describe('AutoWritedParagraph', () => {
  let component: AutoWritedParagraph;
  let fixture: ComponentFixture<AutoWritedParagraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoWritedParagraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoWritedParagraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
