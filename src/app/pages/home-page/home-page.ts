import { AfterViewInit, Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { HeroSection } from '../../sections/home-page-sections/hero-section/hero-section';
import { AboutUsSection } from '../../sections/home-page-sections/about-us-section/about-us-section';
import { DivisionsSection } from '../../sections/home-page-sections/divisions-section/divisions-section';
import { centerLangBased, translate } from '../../core/helpers/helper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';
import { IndustriesServed } from '../../sections/industries-served/industries-served';
import { OurProjectsSection } from '../../sections/our-projects-section/our-projects-section';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, map } from 'rxjs';
import { CustomersSection } from '../../sections/customers-section/customers-section';
import { PartnersSection } from '../../sections/partners-section/partners-section';
import { CertificationsSection } from '../../sections/certifications-section/certifications-section';
import { ContactSection } from '../../sections/contact-section/contact-section';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Footer } from '../../core/ui/footer/footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, SplitText, ScrollToPlugin);
@Component({
  selector: 'app-home-page',
  imports: [
    SharedModule,
    HeroSection,
    AboutUsSection,
    DivisionsSection,
    IndustriesServed,
    OurProjectsSection,
    CustomersSection,
    PartnersSection,
    CertificationsSection,
    ContactSection,
    Footer,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  translate = inject(TranslateService);
  gerenalTimeLine: any;
  ngAfterViewInit(): void {
    this.translate.onLangChange
      .pipe(
        map((l) => l.lang),
        distinctUntilChanged()
      )
      .subscribe((v) => {
        setTimeout(() => {
          this.gsapStuffs();
        }, 500);
      });
  }
  gsapStuffs() {
    this.headerClass();
    this.setUpScrollSmoother();
    this.aboutUsSectionAnimation();
    this.divitionsSectionAnimation();
    this.IndustriesServedAnimation();
    this.projectAnimation();
    this.smallSectionsAnimation();
    this.contactSectionAnimation();
  }
  headerClass() {
    ScrollTrigger.create({
      trigger: '#home-section-link',
      start: 'top top',
      end: 'bottom top',

      onLeave: () => {
        document.querySelector('#header-background')?.classList.add('backdrop-blur-md');
        document.querySelector('#menu-header-link-wrapper')?.classList.add('bg-white/40');
        document.querySelectorAll('.menu-header-link-item-text').forEach((el) => {
          el.classList.add('text-surface-900');
        });
      },

      onEnterBack: () => {
        document.querySelector('#header-background')?.classList.remove('backdrop-blur-md');
        document.querySelector('#menu-header-link-wrapper')?.classList.remove('bg-white/40');
        document.querySelectorAll('.menu-header-link-item-text').forEach((el) => {
          el.classList.remove('text-surface-900');
        });
      },
    });
  }
  setUpScrollSmoother() {
    ScrollSmoother.create({
      smooth: 1,
      // smoothTouch: 0.1,
      // normalizeScroll: true,
      // ignoreMobileResize: true,
    });
    const items = gsap.utils.toArray('.main-flow-item');
    let scrollerEnd = 0;
    items.forEach((item: any) => {
      scrollerEnd += item.offsetHeight;
    });
    this.gerenalTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#bc-trigger',
        start: 'top top',
        end: () => `${scrollerEnd * 4}px bottom`,
        pin: true,
        pinSpacing: true,
        preventOverlaps: true,
        scrub: true,
        immediateRender: false,
      },
    });
  }
  aboutUsSectionAnimation() {
    this.gerenalTimeLine
      .from('#aboutus-title', {
        scale: 3,
        ...centerLangBased(50),
        position: 'absolute',
      })
      .from('#aboutus-section-paragrapth-1', {
        autoAlpha: 0,
        y: 50,
      })
      .from('#aboutus-section-paragrapth-2', {
        autoAlpha: 0,
        y: 50,
      })
      .from('#aboutus-section-paragrapth-3', {
        autoAlpha: 0,
        y: 50,
      })
      .from('#aboutus-section-paragrapth-4', {
        autoAlpha: 0,
        y: 50,
      })
      .to('#aboutus-section-trigger', {
        autoAlpha: 0,
        scale: 0.5,
        y: 0,
      });
  }
  divitionsSectionAnimation() {
    const cards = gsap.utils.toArray('.divition-card');
    const triggerEl = gsap.utils.toArray('#divisions-section-trigger')?.[0] as HTMLElement;
    if (!triggerEl) return;
    const divisionsTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top top',
        end: () => `+=${triggerEl.offsetHeight * 5}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });
    divisionsTimeLine
      .from('#divisions-section-title', {
        scale: 3,
        rotate: 90,
        ...centerLangBased(50),
        position: 'absolute',
        ease: 'power2.inOut',
      })
      .from('#division-card-1', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // ease: 'power1.in'
      })
      .from('#division-card-2', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // duration: 2,
        // ease: 'power1.in'
      })
      .from('#division-card-3', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // duration: 2,
        // ease: 'power1.in'
      })
      .from('#division-card-4', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // duration: 2,
        // ease: 'power1.in'
      })
      .from('#division-card-5', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // duration: 2,
        // ease: 'power1.in'
      })
      .from('#division-card-6', {
        autoAlpha: 0,
        scale: 0.4,
        yPercent: 100,
        // duration: 2,
        // ease: 'power1.in'
      });
    // .to('#divisions-section-trigger', {
    //   scaleY: 0,
    // });
  }
  IndustriesServedAnimation() {
    const el: any[] = gsap.utils.toArray('#industriesServed-section-title');
    const elST = SplitText.create(el, { type: 'words' });
    gsap.from(elST.words, {
      scrollTrigger: {
        trigger: '#industriesServed-section-trigger',
        start: 'top top',
        end: () => `+=${el?.[0]?.offsetHeight * 25}`,
        pin: (<any>el?.[0]).parentElement,
        pinSpacing: true,
        scrub: true,
      },
      autoAlpha: 0,
      yPercent: 400,
      stagger: 0.1,
    });
    (gsap.utils.toArray('.served-section-trigger') as HTMLElement[]).forEach(
      (el: HTMLElement, index: number) => {
        const elHeading = el.querySelector('.industrial-served-card-heading');
        const elParagrah = el.querySelector('.industrial-served-card-paragraph');
        const elParagrahWords = SplitText.create(elParagrah, { type: 'words' })?.words;
        const elImg = el.querySelector('.industrial-served-card-img');
        if (elHeading && elParagrah && elImg) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              pin: true,
              scrub: true,
              start: 'top 200',
              end: () => `+=${el.offsetHeight * 4}`,
            },
          });
          tl.from(elHeading, {
            yPercent: 100,
            autoAlpha: 0,
          });
          tl.from(elParagrahWords, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
          });
          tl.from(
            elImg,
            {
              autoAlpha: 0,
              ease: 'power2.out',
              duration: 2,
            },
            '<'
          );
        }
      }
    );
  }
  projectAnimation() {
    const el: HTMLElement = gsap.utils.toArray('#projects-section-title')?.[0] as HTMLElement;
    gsap.from(el, {
      scrollTrigger: {
        trigger: '#projects-section-trigger',
        start: 'top top',
        end: () => `+=${el.offsetHeight * 15}`,
        pin: el.parentElement,
        pinSpacing: true,
        scrub: true,
      },
      yPercent: 400,
      autoAlpha: 0,
      scale: 2,
    });

    (gsap.utils.toArray('.project-card-trigger') as HTMLElement[]).forEach(
      (el: HTMLElement, index: number) => {
        const elHeading = el.querySelector('.project-card-title');
        const elParagrahTable = el.querySelector('.project-card-table');
        const elParagrahProblem = el.querySelector('.project-card-problem');
        const elParagrahProblemWords = SplitText.create(elParagrahProblem, {
          type: 'words',
        })?.words;
        const elParagrahAddedValue = el.querySelector('.project-card-addedValue');
        const elParagrahAddedValueWords = SplitText.create(elParagrahAddedValue, {
          type: 'words',
        })?.words;
        const elImgList = el.querySelector('.project-card-img-list');
        if (elHeading && elParagrahProblemWords && elParagrahAddedValueWords && elImgList) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              pin: true,
              pinSpacing: true,
              scrub: true,
              start: 'top 200',
              end: () => `+=${el.offsetHeight * 5}`,
            },
          });
          tl.from(elHeading, {
            yPercent: 100,
            autoAlpha: 0,
          });
          tl.from(elParagrahTable, {
            autoAlpha: 0,
          });
          tl.from(elParagrahProblemWords, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
          });
          tl.from(elParagrahAddedValueWords, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
          });
          tl.from(elImgList, {
            autoAlpha: 0,
            yPercent: 10,
            duration: 3,
          });
        }
      }
    );
  }
  smallSectionsAnimation() {
    const smallSectionsEl = gsap.utils.toArray('#small-sections-trigger')?.[0] as HTMLElement;
    const smallSectionssEls = gsap.utils.toArray('.small-section-trigger') as HTMLElement[];
    if (!smallSectionsEl) console.error(`smallSectionsEl is ${smallSectionsEl}`);
    const smallSectionsLine = gsap.timeline({
      scrollTrigger: {
        trigger: smallSectionsEl,
        start: 'top top',
        end: () => `+=${smallSectionsEl.offsetHeight * 6}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
    smallSectionssEls.forEach((el, index) => {
      const title = el.querySelector('.small-section-title');
      const subtitle = el.querySelector('.small-section-subtitle');
      const description = el.querySelector('.small-section-description');
      const imgList = gsap.utils.toArray('.small-section-img-card', el);
      // const imgList = el.querySelectorAll(".small-section-img-card").no;
      if (index != 0) {
        smallSectionsLine.from(
          el,
          {
            xPercent: translate(100),
          },
          '<'
        );
      }
      smallSectionsLine
        .from(title, {
          y: 100,
          autoAlpha: 0,
        })
        .from(subtitle, {
          y: 100,
          autoAlpha: 0,
        })
        .from(description, {
          y: 100,
          autoAlpha: 0,
        })
        .from(imgList, {
          autoAlpha: 0,
          y: 100,
          stagger: 0.2,
        });
      if (index != smallSectionssEls.length - 1) {
        smallSectionsLine.to(el, {
          xPercent: translate(-100),
        });
      }
    });
  }
  contactSectionAnimation() {
    const contactSectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-form-trigger',
        start: 'top center',
        end: 'bottom top',
      },
      defaults: {
        duration: 1,
      },
    });
    contactSectionTl
      .from('#contact-section-wrapper', {
        scale: 0.8,
        y: 100,
        duration: 0.5,
      })
      .from('.contact-form-title', {
        autoAlpha: 0,
        y: 50,
        scale: 0.7,
      })
      .from(
        '#contact-form-wrapper',
        {
          autoAlpha: 0,
        },
        '<'
      );
  }
}
