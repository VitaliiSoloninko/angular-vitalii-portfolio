import { Component, signal } from '@angular/core';
import { CareerTab } from '../../../../../core/models';
import { CAREER_TABS } from '../../../../../data/carrers';

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
