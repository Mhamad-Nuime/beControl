import { AfterViewInit, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangToggle } from '../../components/basic/lang-toggle/lang-toggle';
import { gsap } from 'gsap';

export const sectionIds = {
  home: '#home',
  divisions: '#divisions',
  aboutUs: '#aboutUs',
  contactUs: '#contactUs',
};

@Component({
  selector: 'app-header',
  imports: [SharedModule, LangToggle, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  menuItems: MenuItem[] = [
    {
      id: '1',
      label: 'home',
      icon: 'pi pi-home',
      routerLink: sectionIds.home,
    },
    {
      id: '2',
      label: 'divisions',
      icon: 'pi pi-table',
      routerLink: sectionIds.divisions,
    },
    {
      id: '3',
      label: 'aboutUs',
      icon: 'pi pi-comment',
      routerLink: sectionIds.aboutUs,
    },
    {
      id: '4',
      label: 'contactUs',
      icon: 'pi pi-at',
      routerLink: sectionIds.contactUs,
    },
  ];
  ngAfterViewInit(): void {
    gsap.from('#header-link', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "bounce.out"
    });
  }
}
