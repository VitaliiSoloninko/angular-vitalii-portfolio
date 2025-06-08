import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() projects: any[] = [];
  @Input() project!: any;
  @Input() articles: any[] = [];
  @Input() article!: any;

  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  get items() {
    return this.projects.length ? this.projects : this.articles;
  }
  get activeItem() {
    return this.projects.length ? this.project : this.article;
  }

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
