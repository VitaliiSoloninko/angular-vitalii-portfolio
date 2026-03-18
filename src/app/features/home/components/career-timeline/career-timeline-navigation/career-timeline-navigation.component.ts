import { Component, input, output } from '@angular/core';
import { CareerItem } from '../../../../../core/models';

@Component({
  selector: 'app-career-timeline-navigation',
  imports: [],
  templateUrl: './career-timeline-navigation.component.html',
  styleUrl: './career-timeline-navigation.component.scss',
})
export class CareerTimelineNavigationComponent {
  readonly items = input.required<CareerItem[]>();
  readonly selectedId = input.required<number>();
  readonly selected = output<number>();

  onSelectItem(id: number): void {
    this.selected.emit(id);
  }
}
