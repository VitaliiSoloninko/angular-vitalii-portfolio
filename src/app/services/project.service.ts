import { Injectable } from '@angular/core';
import { projects } from '../data/projects';
import { tags } from '../data/tags';
import { Project } from '../models/project.model';
import { Tag } from '../models/tag.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getAll(): Project[] {
    return projects;
  }

  getProjectById(projectId: string): Project {
    return (
      this.getAll().find((project) => project.id == projectId) ?? new Project()
    );
  }

  getAllProjectsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return tags;
  }

  getAllProjectsByTag(tag: string): Project[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((project) => project.category.includes(tag));
  }
}
