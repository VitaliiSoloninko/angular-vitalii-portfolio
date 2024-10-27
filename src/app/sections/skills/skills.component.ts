import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  frontendSkills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'CSS/SCSS',
    'HTML',
    'Responsive Web Design',
    'Web Application',
  ];
  additionalSkills = [
    'Frontend Development',
    'Frontend Design',
    'User Interface (UI)',
    'User Experience (UX)',
    'Git/GitHub',
  ];
  backendSkills = [
    'NestJS',
    'Express.js',
    'REST API',
    'MongoDB',
    'Mongoose',
    'PostgreSQL',
    'Sequelize',
    'Swagger',
  ];
}
