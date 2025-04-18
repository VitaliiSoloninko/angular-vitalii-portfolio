import { Component, Input } from '@angular/core';
import { IArticle } from '../../../../models/IArticle';

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
