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
  language = [
    {
      year: '06/2024 - 12/2024',
      level: `German C1`,
      institution: `WBS Training, Schwerin`,
    },
    {
      year: '08/2023 - 05/2024',
      level: `German B2`,
      institution: `SBW Gesellschaft, Schwerin`,
    },
    {
      year: '08/2023 - 05/2024',
      level: `German B1`,
      institution: `DAA Academy, Anklam`,
    },
  ];

  education = [
    {
      year: '09/2008 - 06/2009',
      level: `Bauingenieur, Spezialist`,
      institution: `Nationale Universität des Wasser- und Natur Managements, Riwne, Ukraine`,
    },
    {
      year: '09/2004 - 07/2008',
      level: `Bauingenieur, Bachelor`,
      institution: `Nationale Universität des Wasser- und Natur Managements, Riwne, Ukraine`,
    },
    {
      year: '09/1997 - 06/2004',
      level: `Abitur`,
      institution: `Kvasyliv-Gymnasium in Kvasyliv, Ukraine`,
    },
  ];

  frontendSkills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'SCSS',
    'CSS',
    'HTML',
    'Responsive Web Design',
    'Web Application',
    'Web Development',
    'Single Page Application',
  ];

  additionalSkills = [
    'Frontend Development',
    'Frontend Design',
    'User Interface (UI)',
    'User Experience (UX)',
    'Graphic Design',
    'E-Commerce',
    'Git',
    'GitHub',
  ];

  backendSkills = [
    'Node.js',
    'Express.js',
    'NestJS',
    'TypeScript',
    'REST API',
    'Databases',
    'MongoDB',
    'NoSQL',
    'Mongoose',
    'PostgreSQL',
    'Sequelize',
    'Swagger',
  ];
}
