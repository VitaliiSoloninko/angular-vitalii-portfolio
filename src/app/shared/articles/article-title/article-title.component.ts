import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-title',
  standalone: true,
  imports: [],
  templateUrl: './article-title.component.html',
  styleUrl: './article-title.component.scss',
})
export class ArticleTitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
