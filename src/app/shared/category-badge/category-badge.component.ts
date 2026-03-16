import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-badge',
  imports: [],
  templateUrl: './category-badge.component.html',
  styleUrl: './category-badge.component.scss',
})
export class CategoryBadgeComponent {
  category = input<string>('');
}
