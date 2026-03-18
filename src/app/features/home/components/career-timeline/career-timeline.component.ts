import { Component, computed, signal } from '@angular/core';
import { CAREER_ITEMS } from '../../../../core/data/career';
import { CareerItem } from '../../../../core/models';
import { ScrollAnimationDirective, TitleComponent } from '../../../../shared';
import { CareerItemDetailComponent } from './career-item-detail/career-item-detail.component';
import { CareerTimelineNavigationComponent } from './career-timeline-navigation/career-timeline-navigation.component';

@Component({
  selector: 'app-career-timeline',
  imports: [
    CareerTimelineNavigationComponent,
    CareerItemDetailComponent,
    TitleComponent,
    ScrollAnimationDirective,
  ],
  templateUrl: './career-timeline.component.html',
  styleUrl: './career-timeline.component.scss',
})
export class CareerTimelineComponent {
  readonly items: CareerItem[] = CAREER_ITEMS;
  readonly selectedId = signal<number>(this.items[0]?.id ?? 1);

  readonly selectedItem = computed(() =>
    this.items.find((item) => item.id === this.selectedId()),
  );

  onSelectItem(id: number): void {
    this.selectedId.set(id);
  }
}
