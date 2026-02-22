import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { HeroSection } from "../../sections/home-page-sections/hero-section/hero-section";
import { AboutUsSection } from "../../sections/home-page-sections/about-us-section/about-us-section";

@Component({
  selector: 'app-home-page',
  imports: [SharedModule, HeroSection, AboutUsSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  videoList = [
    'video/negotion.webm',
    'video/Installing.webm',
    'video/Programing.webm',
  ];
  currentVideoIndex = 0;
  videoElement = viewChild<ElementRef>('video');
  protected readonly videoSrc = signal<string>('video/negotion.webm');
  protected readonly appDirection = signal<string>('rtl');
  ngAfterViewInit(): void {
    this.videoElement()?.nativeElement.addEventListener("seeked" , () => this.onVideoEnded())
  }
  onVideoEnded() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % 3;
    this.videoSrc.set(this.videoList[this.currentVideoIndex]);
  }
}
