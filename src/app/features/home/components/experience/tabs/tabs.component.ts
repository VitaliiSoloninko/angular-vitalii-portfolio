import { Component, signal } from '@angular/core';
import { CAREER_TABS } from '../../../../../core/data/carrers';
import { CareerTab } from '../../../../../core/models';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  readonly tabs: CareerTab[] = CAREER_TABS;
  readonly selectedTab = signal<number>(this.tabs[0]?.id ?? 1);

  selectTab(id: number): void {
    this.selectedTab.set(id);
  }
}
