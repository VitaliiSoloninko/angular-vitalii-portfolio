import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ArticleService } from '../../../../core/services';
import { ArrowLeftComponent } from '../../../../shared/arrow-left/arrow-left.component';
import { ArrowRightComponent } from '../../../../shared/arrow-right/arrow-right.component';
import { ArticleListComponent } from './article-list/article-list.component';

@Component({
  selector: 'app-articles',
  imports: [ArticleListComponent, ArrowLeftComponent, ArrowRightComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  private readonly articleService = inject(ArticleService);

  readonly articles = this.articleService.articles;
  readonly articlesPerPage = 3;
  readonly currentPage = signal<number>(1);

  readonly totalPages = computed(() =>
    Math.ceil(this.articles().length / this.articlesPerPage),
  );

  readonly displayedArticles = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.articlesPerPage;
    const endIndex = startIndex + this.articlesPerPage;
    return this.articles().slice(startIndex, endIndex);
  });

  ngOnInit(): void {
    // Initialization if needed
  }

  goToPage(page: number): void {
    this.currentPage.set(page);
  }
}
