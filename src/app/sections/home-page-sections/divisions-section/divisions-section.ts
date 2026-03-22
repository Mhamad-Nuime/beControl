import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { DivitionCard } from '../../divition-card/divition-card';


@Component({
  selector: 'app-divisions-section',
  imports: [SharedModule, DivitionCard],
  templateUrl: './divisions-section.html',
  styleUrl: './divisions-section.css',
})
export class DivisionsSection {
  cardBtnPt = {
    label : {
      class : 'text-black'
    },
    icon : {
      class : 'text-black'
    }
  }
}
