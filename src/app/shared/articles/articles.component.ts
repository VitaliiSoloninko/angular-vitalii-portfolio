import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {}
