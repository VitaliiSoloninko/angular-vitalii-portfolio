import { Component, Input } from '@angular/core';
import { Article } from '../../../../core/models';
import { ArticleItemComponent } from '../article-item/article-item.component';

@Component({
  selector: 'app-article-list',
  imports: [ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  @Input() articles: Article[] = [];
}
