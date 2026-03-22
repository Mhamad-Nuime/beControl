import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-divition-card',
  imports: [SharedModule],
  templateUrl: './divition-card.html',
  styleUrl: './divition-card.css',
})
export class DivitionCard {
  section = input.required();
  index = input.required();
  styleClass = input();

  cardBtnPt = {
    label : {
      class : 'text-black'
    },
    icon : {
      class : 'text-black'
    }
  }
} 
