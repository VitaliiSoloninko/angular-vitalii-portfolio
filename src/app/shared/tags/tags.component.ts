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
  tagsWithCount?: Array<Tag & { count: number }> = [];
  selectedTag: string = 'All';

  constructor(private projectService: ProjectService) {
    const tags = this.projectService.getAllTags();
    const projects = this.projectService.getAll();

    this.tagsWithCount = tags.map((tag) => ({
      ...tag,
      count:
        tag.link === 'All'
          ? projects.length
          : projects.filter((project) =>
              Array.isArray(project.category)
                ? project.category.includes(tag.link)
                : project.category === tag.link
            ).length,
    }));
  }

  selectTag(tagLink: string) {
    this.selectedTag = tagLink;
  }
}
