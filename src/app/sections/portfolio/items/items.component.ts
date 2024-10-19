import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
})
export class ItemsComponent {
  projects = [
    {
      id: 1,
      name: 'Tik Talk',
      description: 'Programmers network',
      img: 'assets/portfolio/tiktalk.jpg',
      link: 'https://tik-talk-network.web.app',
      stack: ['Angular', 'TypeScript', 'REST API'],
    },
    {
      id: 2,
      name: 'Portfolio',
      description: 'My works',
      img: 'assets/portfolio/portfolio.jpg',
      link: 'https://soloninko-portfolio.web.app/',
      stack: ['Angular', 'TypeScript'],
    },
    {
      id: 3,
      name: 'HomePro',
      description: 'Home services',
      img: 'assets/portfolio/homepro.jpg',
      link: 'https://vitaliisoloninko.github.io/homepro/',
      stack: ['JavaScript', 'SCSS', 'GULP', 'Webpack'],
    },
    {
      id: 4,
      name: 'Furino',
      description: 'Furniture shop',
      img: 'assets/portfolio/furino.jpg',
      link: 'https://vitaliisoloninko.github.io/furino/',
      stack: ['JavaScript', 'SCSS', 'GULP', 'Webpack'],
    },
    {
      id: 5,
      name: 'FarmVest',
      description: 'Investment company',
      img: 'assets/portfolio/farmvest.jpg',
      link: 'https://vitaliisoloninko.github.io/farmvest/',
      stack: ['JavaScript', 'SCSS', 'GULP', 'Webpack'],
    },
    {
      id: 6,
      name: 'TeaLand',
      description: 'Cafe',
      img: 'assets/portfolio/tealand.jpg',
      link: 'https://vitaliisoloninko.github.io/tealand/',
      stack: ['JavaScript', 'SCSS', 'GULP', 'Webpack'],
    },
    {
      id: 7,
      name: 'Growfy',
      description: 'Marketing agency',
      img: 'assets/portfolio/growfy.jpg',
      link: 'https://vitaliisoloninko.github.io/growfy/',
      stack: ['JS', 'CSS', 'HTML', 'Responsive Web Design'],
    },
    {
      id: 8,
      name: 'Rhythm',
      description: 'Guitar shop',
      img: 'assets/portfolio/guitar.jpg',
      link: 'https://vitaliisoloninko.github.io/guitar/',
      stack: ['JS', 'CSS', 'HTML', 'Responsive Web Design'],
    },
    {
      id: 9,
      name: 'Relvise',
      description: 'Finance and Consultancy',
      img: 'assets/portfolio/relvise.jpg',
      link: 'https://vitaliisoloninko.github.io/relvise/',
      stack: ['JS', 'CSS', 'HTML', 'Responsive Web Design'],
    },
    {
      id: 10,
      name: 'SmartSpace',
      description: 'Real Estate',
      img: 'assets/portfolio/smartspace.jpg',
      link: 'https://vitaliisoloninko.github.io/smartspace/',
      stack: ['JS', 'CSS', 'HTML', 'Responsive Web Design'],
    },
  ];
}
