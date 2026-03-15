import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-badge',
    imports: [CommonModule],
    templateUrl: './category-badge.component.html',
    styleUrl: './category-badge.component.scss'
})
export class CategoryBadgeComponent {
  @Input() category: string = '';
}
