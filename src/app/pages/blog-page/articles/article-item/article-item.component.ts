import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IArticle } from '../../../../models/article.model';
import { ArticleService } from '../../../../services/article.service';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
})
export class ArticleItemComponent {
  @Input() article: IArticle = {} as IArticle;

  constructor(
    private articleService: ArticleService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        const foundArticle = this.articleService.getArticleById(params.id);
        if (foundArticle) {
          this.article = foundArticle;
        } else {
          this.article = {} as IArticle; // or handle the error appropriately
        }
      }
    });
  }
}
