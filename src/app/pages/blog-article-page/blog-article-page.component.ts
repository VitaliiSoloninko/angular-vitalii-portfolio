import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from '../../data/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-article-page.component.html',
  styleUrl: './blog-article-page.component.scss',
})
export class BlogArticlePageComponent {
  article!: IArticle;
  articles: IArticle[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {
    this.articles = this.articleService.getAll();
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        const foundArticle = this.articleService.getArticleById(params.id);
        if (foundArticle) {
          this.article = foundArticle;
        } else {
          // Handle not found case, e.g., navigate away or set a default value
          // this.router.navigate(['/not-found']);
        }
      }
    });
  }
}
