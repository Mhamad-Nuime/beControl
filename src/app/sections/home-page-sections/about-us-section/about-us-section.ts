import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
@Component({
  selector: 'app-about-us-section',
  imports: [SharedModule],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
})
export class AboutUsSection {
  videoList = [
    'video/negotion.webm',
    'video/Installing.webm',
    'video/Programing.webm',
  ];
}
