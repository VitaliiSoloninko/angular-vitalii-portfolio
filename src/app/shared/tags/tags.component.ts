import { Component, inject, output } from '@angular/core';
import { Tag } from '../../core/models';
import { ProjectService } from '../../core/services';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  private projectService = inject(ProjectService);

  tagSelected = output<string>();

  tagsWithCount?: Array<Tag & { count: number }> = [];
  selectedTag: string = 'All';

  constructor() {
    const tags = this.projectService.tags();
    const projects = this.projectService.projects();

    this.tagsWithCount = tags.map((tag: Tag) => ({
      ...tag,
      count:
        tag.link === 'All'
          ? projects.length
          : projects.filter((project: any) =>
              Array.isArray(project.category)
                ? project.category.includes(tag.link)
                : project.category === tag.link,
            ).length,
    }));
  }

  selectTag(tagLink: string) {
    this.selectedTag = tagLink;
    this.tagSelected.emit(tagLink);
  }
}
