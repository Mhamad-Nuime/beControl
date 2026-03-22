import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-project-card',
  imports: [SharedModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  index = input.required();
  styleClass = input();
  section = input.required();
  images = input.required<string[]>();
}
