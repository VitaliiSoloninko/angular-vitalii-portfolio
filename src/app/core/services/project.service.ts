import { computed, Injectable, signal } from '@angular/core';
import { projects } from '../../data/projects';
import { tags } from '../../data/tags';
import { Project, Tag } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projectsSignal = signal<Project[]>(projects);
  private readonly tagsSignal = signal<Tag[]>(tags);

  readonly projects = computed(() => this.projectsSignal());
  readonly tags = computed(() => this.tagsSignal());

  getProjectById(projectId: string): Project {
    return (
      this.projectsSignal().find((project) => project.id === projectId) ??
      new Project()
    );
  }

  getProjectByIdSignal(projectId: string) {
    return computed(() => this.getProjectById(projectId));
  }

  getProjectsBySearchTermSignal(searchTerm: string) {
    return computed(() =>
      this.projectsSignal().filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }

  getProjectsByTagSignal(tag: string) {
    return computed(() =>
      tag === 'All'
        ? this.projectsSignal()
        : this.projectsSignal().filter((project) =>
            project.category.includes(tag),
          ),
    );
  }
}
