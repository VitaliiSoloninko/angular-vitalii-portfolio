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
}
