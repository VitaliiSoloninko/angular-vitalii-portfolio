import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../data/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl = 'http://localhost:3000/articles';

  getAll() {
    return this.httpClient.get<Article[]>(this.baseApiUrl);
  }
}
