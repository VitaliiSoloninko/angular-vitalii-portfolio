import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../data/article.interface';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  constructor(private acticleService: ArticleService) {}
  articles: Article[] = [];

  ngOnInit(): void {
    this.acticleService.getAll().subscribe((val) => {
      this.articles = val;
    });
  }
}
