import { Component, Input } from '@angular/core';
import { Article } from '../../../core/models';
import { ArticleService } from '../../../core/services';
import { ArrowLeftComponent } from '../../../shared/arrow-left/arrow-left.component';
import { ArrowRightComponent } from '../../../shared/arrow-right/arrow-right.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleTitleComponent } from './article-title/article-title.component';

@Component({
  selector: 'app-articles',
  imports: [
    ArticleListComponent,
    ArticleTitleComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  @Input() articles: Article[] = [];

  displayedArticles: Article[] = [];
  articlesPerPage = 3;
  currentPage = 1;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.articles();
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
