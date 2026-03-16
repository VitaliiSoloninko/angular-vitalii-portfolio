import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-title',
  imports: [],
  templateUrl: './article-title.component.html',
  styleUrl: './article-title.component.scss',
})
export class ArticleTitleComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
