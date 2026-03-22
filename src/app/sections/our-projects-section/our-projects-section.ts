import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { ProjectCard } from "../project-card/project-card";

@Component({
  selector: 'app-our-projects-section',
  imports: [SharedModule, ProjectCard],
  templateUrl: './our-projects-section.html',
  styleUrl: './our-projects-section.css',
})
export class OurProjectsSection {

}
