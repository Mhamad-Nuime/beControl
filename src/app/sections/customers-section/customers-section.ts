import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-customers-section',
  imports: [SharedModule],
  templateUrl: './customers-section.html',
  styleUrl: './customers-section.css',
})
export class CustomersSection {
  items = [
    {
      id : 1,
      img : 'image/Emblem_of_Syria.webp'
    },
    {
      id : 2,
      img : 'image/Emblem_of_Syria.webp'
    },
    {
      id : 3,
      img : 'image/Emblem_of_Syria.webp'
    },
    {
      id : 4,
      img : 'image/Emblem_of_Syria.webp'
    },
    {
      id : 5,
      img : 'image/Emblem_of_Syria.webp'
    },
  ];
}
