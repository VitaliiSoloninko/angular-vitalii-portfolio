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
      level: `Master's degree (Civil engineer)`,
      institution: `National university of water and environmental engineering, Rivne, Ukraine`,
    },
    {
      year: '09/2004 - 06/2008',
      level: `Bachelor's degree (Civil engineer)`,
      institution: `National university of water and environmental engineering, Rivne, Ukraine`,
    },
    {
      year: '09/1993 - 06/2004',
      level: `Diploma's degree (High school)`,
      institution: `High school, Kvasilov, Ukraine`,
    },
  ];

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
