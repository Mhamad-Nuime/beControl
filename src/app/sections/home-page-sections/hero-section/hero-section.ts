import { AfterContentInit, Component } from '@angular/core';
import gsap from 'gsap';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-hero-section',
  imports: [SharedModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements AfterContentInit {
  ngAfterContentInit(): void {
    gsap.from('#heroImage',{
      scale : 1.05,
      duration: 10,
      ease : "power1.inOut"
    });

    const heroTl = gsap.timeline({defaults : {duration : 1}});
    heroTl.from("#hero-title", {
      opacity: 0,
      y: 100,
      delay: 1
    })
    .from("#hero-text", {
      opacity: 0
    }, "-=50%")
  }

}
