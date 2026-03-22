import {
  AfterViewInit,
  Component,
  DOCUMENT,
  effect,
  inject,
  linkedSignal,
  output,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from './lang';
import { Popover } from 'primeng/popover';

export type Language = 'ar' | 'en' | null;
export type AppDirection = 'rtl' | 'ltr' | null;

@Component({
  selector: 'app-lang-toggle',
  imports: [SharedModule],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})
export class LangToggle implements AfterViewInit {
  @ViewChild('op') op!: Popover;
  langaugeService = inject(TranslateService);
  document = inject(DOCUMENT);
  langService = inject(Lang);

  lang: WritableSignal<Language> = signal(null);
  languageChanged = output<Language>();

  appDirection: WritableSignal<AppDirection> = signal(null);
  languages = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'العربية',
      value: 'ar',
    },
  ];
  constructor() {
    effect(() => {
      let currentLang = this.lang();
      if (!currentLang) return;
      this.appDirection.set(currentLang == 'ar' ? 'rtl' : 'ltr');
      this.languageChanged.emit(currentLang);
      this.langaugeService.use(currentLang);
      localStorage.setItem('lang', currentLang);
    });
    effect(() => {
      const dir = this.appDirection();
      if (!dir) return;
      if (dir == 'ltr') {
        this.document.body.classList.add('bc-ltr');
        this.document.body.setAttribute('dir', 'ltr');
        this.document.documentElement.setAttribute('dir', 'ltr');
        this.document.documentElement.setAttribute('lang', 'en');
        this.document.body.classList.remove('bc-rtl');
      } else if (dir == 'rtl') {
        this.document.body.classList.add('bc-rtl');
        this.document.body.setAttribute('dir', 'rtl');
        this.document.documentElement.setAttribute('dir', 'rtl');
        this.document.documentElement.setAttribute('lang', 'ar');
        this.document.body.classList.remove('bc-ltr');
      } else throw 'Unknown Direction';
    });
  }
  ngAfterViewInit(): void {
    this.getStroredLang();
  }
  getStroredLang() {
    const lang: Language | null = <Language>localStorage.getItem('lang');
    if (lang) {
      this.lang.set(lang);
    } else {
      this.lang.set('ar');
    }
  }
  toggleLanguage() {
    if (this.lang() == 'ar') {
      this.lang.set('en');
    } else if (this.lang() == 'en') {
      this.lang.set('ar');
    } else throw 'UnKnown language';
  }
  reloadPage(lang: Language) {
    this.op.hide();
    window.location.reload();
  }
  toggle(event : any) {
    this.op.toggle(event);
  }
}
