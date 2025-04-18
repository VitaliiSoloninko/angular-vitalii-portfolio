import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IArticle } from '../../../models/IArticle';
import { TitleComponent } from '../title/title.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [TitleComponent, ArticleItemComponent, CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  articles: IArticle[] = [
    {
      id: 1,
      title: 'Basic counter',
      stack: ['Angular 17+'],
      features: ['Counter'],
      description: '....',
      img: 'assets/blog/01.jpg',
      gitHub: '',
      site: '',
      category: ['Logic', 'Basic'],
      date: '12 April 2025',
    },
    {
      id: 2,
      title: 'Basic posts template',
      stack: ['Angular 14+'],
      features: ['....', '...'],
      description: '...',
      img: 'assets/blog/02.jpg',
      gitHub: '',
      site: '',
      category: ['Logic', 'Basic'],
      date: '12 April 2025',
    },
    {
      id: 3,
      title: 'Basic RxJS template',
      stack: ['Angular 14+'],
      features: ['RxJS'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'assets/blog/03.jpg',
      gitHub: '',
      site: '',
      category: ['Logic', 'Basic'],
      date: '20 Mart 2025',
    },
  ];
}
