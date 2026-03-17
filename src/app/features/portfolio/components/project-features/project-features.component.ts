import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models';

@Component({
  selector: 'app-project-features',
  imports: [],
  templateUrl: './project-features.component.html',
  styleUrl: './project-features.component.scss',
})
export class ProjectFeaturesComponent {
  project = input.required<Project | null>();
}
