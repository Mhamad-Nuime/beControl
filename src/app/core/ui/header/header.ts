import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { MenuItem } from 'primeng/api';
import { LangToggle } from '../../components/basic/lang-toggle/lang-toggle';
import { gsap } from 'gsap';
import { links } from '../../../shared/home-page-links';
import { Menu } from '../../../shared/services/menu';
import { HeaderNavBar } from "../../components/header-nav-bar/header-nav-bar";


export const sectionIds = {
  home: '#home',
  divisions: '#divisions',
  aboutUs: '#aboutUs',
  contactUs: '#contactUs',
};

@Component({
  selector: 'app-header',
  imports: [SharedModule, LangToggle, HeaderNavBar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  menuService = inject(Menu);
  links = links;
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
    gsap.from('.menu-header-link-item', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "bounce.out"
    });
  }

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('meneSwitcher') meneSwitcher!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (
      !this.menu.nativeElement.contains(event.target) &&
      !this.meneSwitcher.nativeElement.contains(event.target) 
    ) {
      this.menuService.status = 'CLOSED';
    }
  }
  moveToSection(sectionId : any){
    gsap.to(window, {
      duration: 1,            // 1 second
      scrollTo: `#${sectionId}`,
      ease: "power2.inOut"
    });
    this.menuService.hide()
  }
}
