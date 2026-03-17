import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models';

@Component({
  selector: 'app-project-stack',
  imports: [],
  templateUrl: './project-stack.component.html',
  styleUrl: './project-stack.component.scss',
})
export class ProjectStackComponent {
  project = input.required<Project | null>();
}
