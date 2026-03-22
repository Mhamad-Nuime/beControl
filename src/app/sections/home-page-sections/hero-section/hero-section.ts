import { AfterContentInit, Component, inject } from '@angular/core';
import gsap , { SteppedEase }  from 'gsap';
import { SharedModule } from '../../../shared/shared-module';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Unsubscripe } from '../../../base/unsubscripe';
import { AutoWritedParagraph } from "../../../core/components/basic/auto-writed-paragraph/auto-writed-paragraph";

@Component({
  selector: 'app-hero-section',
  imports: [SharedModule, AutoWritedParagraph],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection extends Unsubscripe implements AfterContentInit {
  translateService = inject(TranslateService);
  ngAfterContentInit(): void {
    gsap.from('#heroImage', {
      scale: 1.05,
      duration: 10,
      ease: 'power1.inOut',
    });

    const heroTl = gsap.timeline({ defaults: { duration: 1 } });
    heroTl.from('#hero-title', {
      opacity: 0,
      y: 100,
      delay: 1,
    });
    // .from(
    //   '#hero-text',
    //   {
    //     opacity: 0,
    //   },
    //   '-=50%'
    // );
  //   this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
  //     gsap.fromTo(
  //       '#hero-cursor',
  //       { autoAlpha: 0, x: -10 },
  //       { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
  //     );
  
  //     let tween = gsap.to('#hero-text', {
  //       text: {
  //         value : this.translateService.instant('section.hero.text')
  //       },
  //       duration: 5,
  //       delay: 1,
  //       ease: 'none',
  //     });
  // });

  }
}
