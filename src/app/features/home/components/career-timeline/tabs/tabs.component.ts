import { Component, signal } from '@angular/core';
import { CAREER_ITEMS } from '../../../../../core/data/career';
import { CareerItem } from '../../../../../core/models';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  readonly tabs: CareerItem[] = CAREER_ITEMS;
  readonly selectedTab = signal<number>(this.tabs[0]?.id ?? 1);

  selectTab(id: number): void {
    this.selectedTab.set(id);
  }
}
