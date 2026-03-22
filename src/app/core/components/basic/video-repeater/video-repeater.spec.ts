import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRepeater } from './video-repeater';

describe('VideoRepeater', () => {
  let component: VideoRepeater;
  let fixture: ComponentFixture<VideoRepeater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoRepeater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRepeater);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
