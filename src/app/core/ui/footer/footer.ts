import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { NavLink } from "../../components/nav-link/nav-link";
import { links } from '../../../shared/home-page-links';

@Component({
  selector: 'app-footer',
  imports: [SharedModule, NavLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  links = links;
}
