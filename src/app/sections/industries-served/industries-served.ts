import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { IndustriesServedCard } from "../industries-served-card/industries-served-card";

@Component({
  selector: 'app-industries-served',
  imports: [SharedModule, IndustriesServedCard],
  templateUrl: './industries-served.html',
  styleUrl: './industries-served.css',
})
export class IndustriesServed {

}
