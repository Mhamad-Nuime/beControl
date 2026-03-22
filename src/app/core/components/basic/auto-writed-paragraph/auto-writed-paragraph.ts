import { Component, effect, inject, input } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { v4 as uuid } from 'uuid';
import gsap, { SteppedEase } from 'gsap';

@Component({
  selector: 'app-auto-writed-paragraph',
  imports: [],
  templateUrl: './auto-writed-paragraph.html',
  styleUrl: './auto-writed-paragraph.css',
})
export class AutoWritedParagraph {
  id = input();
  styleClass = input();
  text = input.required();

  uid = uuid();

  tranlate = inject(TranslateService);

  constructor() {
    this.tranlate.onLangChange.subscribe((event: LangChangeEvent) => {
      gsap.fromTo(
        `#hero-cursor-${this.uid}`,
        { autoAlpha: 0, x: -10 },
        { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
      );

      let tween = gsap.to(`#hero-text-${this.uid}`, {
        text: {
          value: this.tranlate.instant(this.text() as string),
        },
        duration: 5,
        delay: 2,
        ease: 'none',
      });
    });
  }
}
