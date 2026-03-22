import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-certifications-section',
  imports: [SharedModule],
  templateUrl: './certifications-section.html',
  styleUrl: './certifications-section.css',
})
export class CertificationsSection {
  items = [
    {
      id: "",
      img : ""
    }
  ];
} 
