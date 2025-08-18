import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tag } from '../../models/tag.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  @Output() tagSelected = new EventEmitter<string>();

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
    this.tagSelected.emit(tagLink);
  }
}
