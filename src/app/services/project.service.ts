import { Injectable } from '@angular/core';
import { Project } from '../data/project.interface';
import { projects } from '../data/projects';
import { Tag } from '../data/tag.interface';
import { tags } from '../data/tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getAll(): Project[] {
    return projects;
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
      : this.getAll().filter((project) => project.stack.includes(tag));
  }

  // getProjectById(projectId: string): Project {
  //   return this.getAll().find((project) => project.id == projectId);
  // }
}
