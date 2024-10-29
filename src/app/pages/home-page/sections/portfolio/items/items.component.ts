import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../../data/project.interface';
import { ProjectService } from '../../../../../services/project.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = projectService.getAll();
  }
}
