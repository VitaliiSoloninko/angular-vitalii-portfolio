# 📝 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Complete project documentation (README, ARCHITECTURE, CONTRIBUTING)

## [2.0.0] - 2026-03-18

### 🚀 Major Updates

#### Added

- **Scroll Animation System** - custom directive with IntersectionObserver API
  - 6 animation types: fade-up, fade-down, fade-left, fade-right, fade-in, scale-in
  - Configurable delay and threshold
  - Staggered animations for lists
  - SCSS mixins for animation effects
- **Feature-based Architecture** - complete restructuring
  - `core/` layer for services, models, and data
  - `features/` with lazy-loaded routes (home, blog, project)
  - `shared/` for reusable components and directives
  - `layout/` for app-wide components
- **Angular 21 Features**
  - New Control Flow syntax (`@for`, `@if`, `@switch`)
  - Signal-based APIs (`input()`, `output()`, `inject()`)
  - Standalone components (100% standalone)
  - Computed signals for derived state
- **Home Page Animations**
  - About section with fade-right and fade-left
  - Portfolio cards with staggered fade-up
  - Career timeline with side animations
  - Skills badges with scale-in effect

#### Changed

- **Migrated from Angular 18 to Angular 21**
  - Updated all dependencies
  - Refactored to new APIs
  - Removed all decorators (`@Input`, `@Output`)
  - Converted to new control flow syntax
- **Component Architecture**
  - All components now standalone
  - Signal-based state management
  - Direct imports instead of barrel patterns
  - Improved type safety
- **Routing System**
  - Lazy loading for all features
  - Route-level code splitting
  - Improved load performance

#### Refactored

- **Home Feature**
  - AboutComponent with child components
  - PortfolioComponent with filterable projects
  - CareerTimelineComponent with navigation
  - SkillsComponent with education timeline
- **Shared Components**
  - NavBarComponent
  - TagsComponent with dynamic counts
  - TitleComponent
  - TimelineComponent
  - SocialLinksComponent
  - SearchComponent
  - CategoryBadgeComponent
  - Arrow components (left/right)
- **Core Services**
  - ProjectService with signal-based state
  - ArticleService with signal-based state

#### Improved

- **Performance**
  - Lazy loading reduces initial bundle size
  - IntersectionObserver for efficient scroll detection
  - Computed signals for memoized values
- **Developer Experience**
  - Clear architecture guidelines
  - Conventional commits standard
  - Comprehensive documentation
  - Type-safe APIs throughout

### 📚 Documentation

- Created comprehensive README with features, installation, and usage
- Added ARCHITECTURE.md with detailed structure and patterns
- Added CONTRIBUTING.md with development guidelines
- Added CHANGELOG.md (this file)

## [1.0.0] - 2024-XX-XX

### Added

- Initial project setup with Angular 18
- Basic routing (Home, Project Detail, Blog)
- Project showcase with filtering
- Blog with articles
- Responsive design
- SCSS styling
- Firebase Hosting deployment

### Features

- **Home Page** with projects and experience
- **Project Detail Page** with full project information
- **Blog Pages** with article list and detail views
- **Header** and **Footer** layout components
- **Reusable Components**: Tags, NavBar, Search, Social Links

---

## Migration Timeline

### Phase 1: Setup (✅ Completed)

- Angular 21 update
- New folder structure
- Core layer setup

### Phase 2: Features Migration (✅ Completed)

- Home feature (about, portfolio, career, skills)
- Project feature (hero, stack, features, pages, description)
- Blog feature (list, detail)

### Phase 3: Layout & Shared (✅ Completed)

- Header and Footer components
- Shared components (tags, navbar, title, etc.)
- Directives (scroll animation)

### Phase 4: Enhancements (✅ Completed)

- Scroll animation system
- Signal-based state management
- New control flow syntax
- Performance optimizations

### Phase 5: Documentation (✅ Completed)

- README with comprehensive guide
- Architecture documentation
- Contributing guidelines
- Changelog

---

## Future Enhancements

### Planned Features

- [ ] Dark mode support
- [ ] Internationalization (i18n) - German/English
- [ ] Blog content management system
- [ ] Contact form with validation
- [ ] SEO optimization (meta tags, structured data)
- [ ] Progressive Web App (PWA) features
- [ ] Performance monitoring
- [ ] Analytics integration
- [ ] A11y improvements (accessibility)

### Technical Improvements

- [ ] Unit test coverage
- [ ] E2E tests with Playwright
- [ ] CI/CD pipeline automation
- [ ] Performance budgets
- [ ] Image optimization pipeline
- [ ] Service Worker for offline support

---

## Version History

| Version | Date       | Description                     |
| ------- | ---------- | ------------------------------- |
| 2.0.0   | 2026-03-18 | Angular 21, Signals, Animations |
| 1.0.0   | 2024-XX-XX | Initial release with Angular 18 |

---

**Format**: Based on [Keep a Changelog](https://keepachangelog.com/)  
**Versioning**: Following [Semantic Versioning](https://semver.org/)
