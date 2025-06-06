import { Injectable } from '@angular/core';
import { IArticle } from '../data/article.model';
import { articles } from '../data/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getAll(): IArticle[] {
    return articles;
  }
}
