import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../core/models';
import { ArticleService } from '../../core/services';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-blog-article-page',
  imports: [NavBarComponent],
  templateUrl: './blog-article-page.component.html',
  styleUrl: './blog-article-page.component.scss',
})
export class BlogArticlePageComponent {
  article!: Article;
  articles: Article[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
  ) {
    this.articles = this.articleService.articles();
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

  navigateTo(direction: number) {
    const currentId = Number(this.article.id);
    const ids = this.articles.map((p) => Number(p.id));
    const idx = ids.indexOf(currentId);
    const prevIdx = (idx + direction + ids.length) % ids.length;
    this.router.navigate(['/blog-article', ids[prevIdx]]);
  }

  goToPrev() {
    this.navigateTo(-1);
  }

  goToNext() {
    this.navigateTo(1);
  }
}
