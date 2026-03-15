import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../../../core/models';
import { ArticleService } from '../../../../core/services';

@Component({
  selector: 'app-article-item',
  imports: [RouterLink],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
})
export class ArticleItemComponent {
  @Input() article: Article = {} as Article;

  constructor(
    private articleService: ArticleService,
    activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        const foundArticle = this.articleService.getArticleById(params.id);
        if (foundArticle) {
          this.article = foundArticle;
        } else {
          this.article = {} as Article; // or handle the error appropriately
        }
      }
    });
  }
}
