import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models';

@Component({
  selector: 'app-project-description',
  imports: [],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.scss',
})
export class ProjectDescriptionComponent {
  project = input.required<Project | null>();
}
