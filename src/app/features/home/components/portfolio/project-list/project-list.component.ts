import { Component, input } from '@angular/core';
import { Project } from '../../../../../core/models';
import { ScrollAnimationDirective } from '../../../../../shared';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCardComponent, ScrollAnimationDirective],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  readonly projects = input.required<Project[]>();
}
