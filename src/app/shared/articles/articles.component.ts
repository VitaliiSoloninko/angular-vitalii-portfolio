import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IArticle } from '../../../models/IArticle';
import { TitleComponent } from '../title/title.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleTitleComponent } from './article-title/article-title.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    TitleComponent,
    ArticleItemComponent,
    CommonModule,
    ArticleListComponent,
    ArticleTitleComponent,
    NgIf,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  readonly templateUrl = 'assets/angular-templates';

  @Input() articles: IArticle[] = [];
  displayedArticles: IArticle[] = [];
  articlesPerPage = 3;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.angularTemplates.length / this.articlesPerPage);
  }

  ngOnInit() {
    this.updateDisplayedArticles();
  }

  updateDisplayedArticles() {
    const startIndex = (this.currentPage - 1) * this.articlesPerPage;
    const endIndex = startIndex + this.articlesPerPage;
    this.displayedArticles = this.angularTemplates.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedArticles();
  }

  angularTemplates: IArticle[] = [
    {
      id: 1,
      title: 'Login and Registration',
      stack: ['Angular', 'Version 17+'],
      features: ['Reactive Forms'],
      description: 'Registration and login page template with design and forms',
      img: `${this.templateUrl}/login.jpg`,
      gitHub: '',
      site: '',
      category: ['Template', 'Layout'],
      date: '22 January 2025',
    },
    {
      id: 2,
      title: 'GRUD operations',
      stack: ['Angular', 'Version 17+', 'Bootstrap', 'JSON Server'],
      features: ['GRUD', 'Create', 'Read', 'Update', 'Delete'],
      description:
        'Basic project to test all GRUD operations, with JSON server',
      img: `${this.templateUrl}/crud.jpg`,
      gitHub: '',
      site: '',
      category: ['Logic', 'Basic'],
      date: '31 January 2025',
    },
    {
      id: 3,
      title: 'Reactive Forms',
      stack: ['Angular', 'Version 17+'],
      features: [
        'Login',
        'Sing up',
        'Validators',
        'Custom Validators',
        'Async Validators',
        'save to localStorage',
        'get from localStorage',
        'Form Groups',
        'Form Arrays',
        'show error message',
        'equal passwords',
      ],
      description: 'REACTIVE forms and all their features',
      img: `${this.templateUrl}/reactive-forms.jpg`,
      gitHub: '',
      site: '',
      category: ['Template'],
      date: '19 September 2024',
    },
    {
      id: 4,
      title: 'Driven Forms',
      stack: ['Angular', 'Version 17+'],
      features: [
        'Login',
        'Validators',
        'save to localStorage',
        'get from localStorage',
      ],
      description: 'Basic project for working with DRIVEN forms',
      img: `${this.templateUrl}/driven-form.jpg`,
      gitHub: '',
      site: '',
      category: ['Template'],
      date: '14 September 2024',
    },
  ];

  angularBasic: IArticle[] = [
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      img: 'assets/blog/03.jpg',
      gitHub: '',
      site: '',
      category: ['Logic', 'Basic'],
      date: '20 Mart 2025',
    },
  ];
}
