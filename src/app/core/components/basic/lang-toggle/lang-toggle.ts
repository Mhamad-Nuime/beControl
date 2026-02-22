import {
  AfterViewInit,
  Component,
  DOCUMENT,
  effect,
  inject,
  linkedSignal,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';

export type Language = 'ar' | 'en' | null;
export type AppDirection = 'rtl' | 'ltr' | null;

@Component({
  selector: 'app-lang-toggle',
  imports: [SharedModule],
  templateUrl: './lang-toggle.html',
  styleUrl: './lang-toggle.css',
})
export class LangToggle implements AfterViewInit {
  langaugeService = inject(TranslateService);
  document = inject(DOCUMENT);

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
        this.document.documentElement.setAttribute('lang', 'en');
        this.document.body.classList.remove('bc-rtl');
      } else if (dir == 'rtl') {
        this.document.body.classList.add('bc-rtl');
        this.document.body.setAttribute('dir', 'rtl');
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
}
