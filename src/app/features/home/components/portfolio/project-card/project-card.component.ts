import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../../core/models';
import { CategoryBadgeComponent } from '../../../../../shared/category-badge/category-badge.component';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, CategoryBadgeComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
