import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  tabs: any = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  selectedTab: number = 1;
  selectTab(tabId: number): void {
    this.selectedTab = tabId;
  }
}
