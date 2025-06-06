import { Component, Input } from '@angular/core';
import { IArticle } from '../../../data/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
})
export class ArticleItemComponent {
  @Input() article: IArticle = {} as IArticle;
}
