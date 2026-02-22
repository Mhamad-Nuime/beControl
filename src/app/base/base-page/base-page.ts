import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-base-page',
  imports: [],
  templateUrl: './base-page.html',
  styleUrl: './base-page.css',
})
export class BasePage {
  styleClass: InputSignal<string> = input('');
}
