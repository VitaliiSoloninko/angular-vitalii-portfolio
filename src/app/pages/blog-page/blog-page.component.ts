import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {}
