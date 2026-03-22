import { Component, HostListener, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-nav-link',
  imports: [TranslateModule],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css',
})
export class NavLink {
  icon = input();
  label = input.required<string>();
  sectionId = input.required();
  styleClass = input();

  @HostListener('click')
  onClick(){
    gsap.to(window, {
      duration: 1,            // 1 second
      scrollTo: `#${this.sectionId()}`,
      ease: "power2.inOut"
    });
  }
}
