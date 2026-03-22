import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MenuStatus = 'OPENED' | 'CLOSED';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private _status: MenuStatus = 'CLOSED';
  private statusSub = new BehaviorSubject<MenuStatus>('CLOSED');
  status$ = this.statusSub.asObservable();
  set status(v: MenuStatus) {
    this._status = v;
    this.statusSub.next(v);
  }
  get status() {
    return this._status;
  }
  toggle() {
    if (this.status == 'OPENED') this.status = 'CLOSED';
    else if (this.status == 'CLOSED') this.status = 'OPENED';
    else throw `Unknowen Menu Status : ${this.status}`;
  }
  show() {
    this.status = 'OPENED';
  }
  hide() {
    this.status = 'CLOSED';
  }
}
