import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models';

@Component({
  selector: 'app-project-pages',
  imports: [],
  templateUrl: './project-pages.component.html',
  styleUrl: './project-pages.component.scss',
})
export class ProjectPagesComponent {
  project = input.required<Project | null>();
}
