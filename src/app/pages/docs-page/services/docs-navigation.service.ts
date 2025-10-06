import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface QuickStartCard {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Injectable({
  providedIn: 'root',
})
export class DocsNavigationService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
  private currentRouteSubject = new BehaviorSubject<string>('');

  public sidebarOpen$ = this.sidebarOpenSubject.asObservable();
  public currentRoute$ = this.currentRouteSubject.asObservable();

  public menuSections: MenuSection[] = [
    {
      title: 'Documentation',
      items: [
        {
          title: 'Introduction',
          route: '/docs/introduction',
        },
        {
          title: 'Authorization',
          route: '/docs/authorization',
          children: [{ title: 'JWT Tokens', route: '/docs/authorization/jwt' }],
        },
        {
          title: 'Layout',
          route: '/docs/layout',
          children: [
            { title: 'Grid', route: '/docs/layout/grid' },
            { title: 'Flexbox', route: '/docs/layout/flexbox' },
          ],
        },
      ],
    },
  ];

  public quickStartCards: QuickStartCard[] = [
    {
      title: 'Introduction',
      description: 'Learn the basics and get started with the platform',
      icon: '🚀',
      route: '/docs/introduction',
    },
    {
      title: 'Authorization',
      description: 'Implement JWT authentication and security',
      icon: '🔐',
      route: '/docs/authorization',
    },
    {
      title: 'Layout System',
      description: 'Master Grid and Flexbox layout techniques',
      icon: '📐',
      route: '/docs/layout',
    },
  ];

  // Геттер для прямого доступа к элементам меню
  get menuItems(): MenuItem[] {
    return this.menuSections[0]?.items || [];
  }

  constructor(private router: Router) {
    // Отслеживаем изменения роута
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRouteSubject.next(event.urlAfterRedirects);
      });
  }

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }

  closeSidebar() {
    this.sidebarOpenSubject.next(false);
  }

  openSidebar() {
    this.sidebarOpenSubject.next(true);
  }

  // Методы для работы с меню
  expandMenuItem(item: MenuItem) {
    item.expanded = !item.expanded;
  }

  isRouteActive(route: string): boolean {
    return this.currentRouteSubject.value === route;
  }

  isParentActive(item: MenuItem): boolean {
    const currentRoute = this.currentRouteSubject.value;
    if (item.children) {
      return item.children.some((child) => child.route === currentRoute);
    }
    return false;
  }

  // Поиск пункта меню по роуту
  findMenuItemByRoute(route: string, items: MenuItem[] = []): MenuItem | null {
    if (items.length === 0) {
      // Ищем во всех секциях
      for (const section of this.menuSections) {
        const found = this.findMenuItemByRoute(route, section.items);
        if (found) return found;
      }
      return null;
    }

    for (const item of items) {
      if (item.route === route) {
        return item;
      }
      if (item.children) {
        const found = this.findMenuItemByRoute(route, item.children);
        if (found) return found;
      }
    }
    return null;
  }

  // Получить заголовок страницы по роуту
  getPageTitle(route: string): string {
    const menuItem = this.findMenuItemByRoute(route);
    return menuItem?.title || 'Documentation';
  }

  // Получить все доступные роуты
  getAllRoutes(): string[] {
    const routes: string[] = [];

    const extractRoutes = (items: MenuItem[]) => {
      items.forEach((item) => {
        if (item.route) {
          routes.push(item.route);
        }
        if (item.children) {
          extractRoutes(item.children);
        }
      });
    };

    this.menuSections.forEach((section) => {
      extractRoutes(section.items);
    });

    return routes;
  }

  // Навигация
  navigateToNext(currentRoute: string): string | null {
    const routes = this.getAllRoutes();
    const currentIndex = routes.indexOf(currentRoute);

    if (currentIndex >= 0 && currentIndex < routes.length - 1) {
      return routes[currentIndex + 1];
    }

    return null;
  }

  navigateToPrevious(currentRoute: string): string | null {
    const routes = this.getAllRoutes();
    const currentIndex = routes.indexOf(currentRoute);

    if (currentIndex > 0) {
      return routes[currentIndex - 1];
    }

    return null;
  }

  // Обработка клика по навигации
  handleNavClick(item: MenuItem): void {
    if (item.children && item.children.length > 0) {
      this.expandMenuItem(item);
    } else if (item.route) {
      this.navigateToRoute(item.route);
    }
  }

  // Навигация к роуту
  navigateToRoute(route: string): void {
    this.router.navigate([route]);
    this.closeSidebar();
  }
}
