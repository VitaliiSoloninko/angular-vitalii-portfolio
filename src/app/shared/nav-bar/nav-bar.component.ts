import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  projects = input<any[]>([]);
  project = input<any>();
  articles = input<any[]>([]);
  article = input<any>();

  prev = output<void>();
  next = output<void>();

  items = computed(() =>
    this.projects().length ? this.projects() : this.articles(),
  );
  activeItem = computed(() =>
    this.projects().length ? this.project() : this.article(),
  );

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
