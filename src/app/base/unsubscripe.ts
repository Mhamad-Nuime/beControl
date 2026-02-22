import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export class Unsubscripe implements OnDestroy {
    private _subsList : Subscription[] = [];
    set subs(value : Subscription){
        this._subsList.push(value);
    }
    
    ngOnDestroy(): void {
        this._subsList.forEach(sub => sub.unsubscribe());
    }
}