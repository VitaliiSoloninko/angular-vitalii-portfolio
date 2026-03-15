import { Injectable } from '@angular/core';
import { articles } from '../data/articles';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getAll(): Article[] {
    return articles;
  }

  getArticleById(articleId: number): Article | undefined {
    return this.getAll().find((article) => article.id == articleId);
  }
}
