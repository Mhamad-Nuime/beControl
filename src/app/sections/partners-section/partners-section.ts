import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-partners-section',
  imports: [SharedModule],
  templateUrl: './partners-section.html',
  styleUrl: './partners-section.css',
})
export class PartnersSection {
  items = [
    {
      id : '1',
      img : 'image/siemens.webp'
    },
    {
      id : '2',
      img : 'image/haiwell.webp'
    },
    {
      id : '3',
      img : 'image/siemens.webp'
    },
    {
      id : '4',
      img : 'image/haiwell.webp'
    },
    {
      id : '5',
      img : 'image/siemens.webp'
    },
    {
      id : '6',
      img : 'image/haiwell.webp'
    },
    {
      id : '7',
      img : 'image/siemens.webp'
    },
    {
      id : '8',
      img : 'image/haiwell.webp'
    },
    {
      id : '9',
      img : 'image/siemens.webp'
    },
    {
      id : '10',
      img : 'image/haiwell.webp'
    },
  ];
}
