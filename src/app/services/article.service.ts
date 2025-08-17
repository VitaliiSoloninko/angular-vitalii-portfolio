import { Injectable } from '@angular/core';
import { articles } from '../data/articles';
import { IArticle } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getAll(): IArticle[] {
    return articles;
  }

  getArticleById(articleId: number): IArticle | undefined {
    return this.getAll().find((article) => article.id == articleId);
  }
}
