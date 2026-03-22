import { Component, EventEmitter, Output, output } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { links } from '../../../shared/home-page-links';

@Component({
  selector: 'app-header-nav-bar',
  imports: [SharedModule],
  templateUrl: './header-nav-bar.html',
  styleUrl: './header-nav-bar.css',
})
export class HeaderNavBar {
  links = links;
  @Output() navigate = new EventEmitter<string>();
  navTo(sectionId : string){
    this.navigate.emit(sectionId)
  }
}
