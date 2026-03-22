import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-video-repeater',
  imports: [],
  templateUrl: './video-repeater.html',
  styleUrl: './video-repeater.css',
})
export class VideoRepeater implements AfterViewInit {
  list = input<string[]>([]);
  styleClass = input<string>('');
  currentVideoIndex = 0;
  videoElement = viewChild<ElementRef>('video');
  protected readonly videoSrc = signal<string>('video/negotion.webm');

  ngAfterViewInit(): void {
    this.videoElement()?.nativeElement.addEventListener("seeked" , () => this.onVideoEnded())
  }
  
  onVideoEnded() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % 3;
    this.videoSrc.set(this.list()[this.currentVideoIndex]);
  }
}
