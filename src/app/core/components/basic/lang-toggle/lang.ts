import { Injectable } from '@angular/core';
import { Language } from './lang-toggle';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Lang {
  private langSubject = new BehaviorSubject<Language>('ar');
  lang$ = this.langSubject.asObservable();
  constructor(){}
  set lang(value : Language){
    this.langSubject.next(value);
  }
  get lang(){
    return this.langSubject.value;
  }
}
