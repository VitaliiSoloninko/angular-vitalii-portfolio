import { computed, Injectable, signal } from '@angular/core';
import { articles } from '../../data/articles';
import { Article } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly articlesSignal = signal<Article[]>(articles);

  readonly articles = computed(() => this.articlesSignal());

  getArticleById(articleId: number): Article | undefined {
    return this.articlesSignal().find((article) => article.id === articleId);
  }

  getArticleByIdSignal(articleId: number) {
    return computed(() => this.getArticleById(articleId));
  }
}
