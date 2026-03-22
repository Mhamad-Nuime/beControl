import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavBar } from './header-nav-bar';

describe('HeaderNavBar', () => {
  let component: HeaderNavBar;
  let fixture: ComponentFixture<HeaderNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
