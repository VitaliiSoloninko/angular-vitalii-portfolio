import { Component } from '@angular/core';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { TitleComponent } from '../../../../shared';

@Component({
  selector: 'app-blog-page',
  imports: [ArticlesComponent, TitleComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {}
