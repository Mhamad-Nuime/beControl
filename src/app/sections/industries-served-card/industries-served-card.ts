import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-industries-served-card',
  imports: [SharedModule],
  templateUrl: './industries-served-card.html',
  styleUrl: './industries-served-card.css',
})
export class IndustriesServedCard {
  index = input.required();
  section = input.required();
  styleClass = input();
}
