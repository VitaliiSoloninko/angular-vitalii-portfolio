import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IArticle } from '../../../data/article.model';
import { ArticleService } from '../../../services/article.service';
import { ArrowLeftComponent } from '../../../shared/arrow-left/arrow-left.component';
import { ArrowRightComponent } from '../../../shared/arrow-right/arrow-right.component';
import { TitleComponent } from '../../../shared/title/title.component';
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
    ArrowLeftComponent,
    ArrowRightComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  @Input() articles: IArticle[] = [];

  displayedArticles: IArticle[] = [];
  articlesPerPage = 3;
  currentPage = 1;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getAll();
  }

  get totalPages(): number {
    return Math.ceil(this.articles.length / this.articlesPerPage);
  }

  ngOnInit() {
    this.updateDisplayedArticles();
  }

  updateDisplayedArticles() {
    const startIndex = (this.currentPage - 1) * this.articlesPerPage;
    const endIndex = startIndex + this.articlesPerPage;
    this.displayedArticles = this.articles.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedArticles();
  }
}
