import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Blog } from '../../data/blog.model';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
  blogs: Blog[] = [
    {
      id: '1',
      title: 'How to prototype in figma',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...`,
      img: 'assets/blog/01.jpg',
      gitHub: '...',
      site: '...',
      category: '...',
      version: ['v 0.1', 'v 0.2', 'v 0.3', 'v 0.4', 'v 0.5'],
      date: 'July 15, 2021',
    },
    {
      id: '2',
      title: 'Being more productive with Notion',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...`,
      img: 'assets/blog/02.jpg',
      gitHub: '...',
      site: '...',
      category: '...',
      version: ['v 0.1', 'v 0.2', 'v 0.3', 'v 0.4', 'v 0.5'],
      date: 'Aug 8, 2020',
    },
    {
      id: '3',
      title: 'Beginners guide to adobe illustrator',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...`,
      img: 'assets/blog/03.jpg',
      gitHub: '...',
      site: '...',
      category: '...',
      version: ['v 0.1', 'v 0.2', 'v 0.3', 'v 0.4', 'v 0.5'],
      date: 'Feb 19, 2021',
    },
  ];
}
