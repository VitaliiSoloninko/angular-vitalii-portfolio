import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../../../core/models';

@Component({
  selector: 'app-article-item',
  imports: [RouterLink],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
})
export class ArticleItemComponent {
  article = input.required<Article>();
}
