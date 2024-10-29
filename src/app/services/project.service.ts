import { Injectable } from '@angular/core';
import { Project } from '../data/project.interface';
import { projects } from '../data/projects';

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

  // getProjectById(projectId: string): Project {
  //   return this.getAll().find((project) => project.id == projectId);
  // }
}
