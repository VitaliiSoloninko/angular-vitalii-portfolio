import { Component, Input } from '@angular/core';
import { IArticle } from '../../../../models/IArticle';
import { ArticleItemComponent } from '../article-item/article-item.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  @Input() articles: IArticle[] = [];
}
