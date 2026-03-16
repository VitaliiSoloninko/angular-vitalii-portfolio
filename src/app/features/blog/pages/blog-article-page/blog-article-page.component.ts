import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ArticleService } from '../../../../core/services';
import { NavBarComponent } from '../../../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-blog-article-page',
  imports: [NavBarComponent],
  templateUrl: './blog-article-page.component.html',
  styleUrl: './blog-article-page.component.scss',
})
export class BlogArticlePageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly articleService = inject(ArticleService);

  readonly articles = this.articleService.articles;

  private readonly articleId = toSignal(
    this.route.params.pipe(map((params) => params['id'])),
    { initialValue: '' },
  );

  readonly article = computed(() => {
    const id = this.articleId();
    return id ? this.articleService.getArticleById(id) : null;
  });

  navigateTo(direction: number): void {
    const currentArticle = this.article();
    if (!currentArticle) return;

    const currentId = Number(currentArticle.id);
    const ids = this.articles().map((a) => Number(a.id));
    const idx = ids.indexOf(currentId);
    const prevIdx = (idx + direction + ids.length) % ids.length;
    this.router.navigate(['/blog/article', ids[prevIdx]]);
  }

  goToPrev(): void {
    this.navigateTo(-1);
  }

  goToNext(): void {
    this.navigateTo(1);
  }
}
