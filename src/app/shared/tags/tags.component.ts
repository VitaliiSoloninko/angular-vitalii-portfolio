import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tag } from '../../data/tag.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  tags?: Tag[];

  constructor(projectService: ProjectService) {
    this.tags = projectService.getAllTags();
  }
}
