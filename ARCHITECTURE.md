# 🏗️ Архитектура проекта

## 📦 Структура папок

```
src/app/
  ├── core/           # Singleton сервисы, модели, константы
  │   ├── constants/  # API URLs, конфигурация
  │   ├── models/     # Интерфейсы и типы
  │   ├── services/   # Глобальные сервисы
  │   └── utils/      # Утилиты и хелперы
  │
  ├── features/       # Бизнес-фичи с изолированными роутами
  │   ├── home/       # Главная страница
  │   │   ├── pages/
  │   │   ├── components/
  │   │   └── home.routes.ts
  │   ├── portfolio/  # Портфолио и детали проектов
  │   │   ├── pages/
  │   │   ├── components/
  │   │   ├── data/
  │   │   └── portfolio.routes.ts
  │   └── blog/       # Блог и детали статей
  │       ├── pages/
  │       ├── components/
  │       ├── data/
  │       └── blog.routes.ts
  │
  ├── shared/         # Переиспользуемые компоненты
  │   ├── components/ # skill-list, nav-bar, tags, title
  │   └── ui/         # arrow-left, arrow-right, и др.
  │
  └── layout/         # Компоненты макета
      ├── header/
      └── footer/
```

## 📋 Соглашения

### Best Practices
- ✅ Использовать новый синтаксис Control Flow: `@for`, `@if`, `@switch`
- ✅ Использовать Signal-based APIs: `input()`, `output()`, `inject()`
- ✅ Избегать старых декораторов: `@Input()`, `@Output()`, constructor DI
- ✅ Избегать старого синтаксиса: `*ngFor`, `*ngIf`, `*ngSwitch`

### Git Commits
Использовать **Conventional Commits**:
```
feat(feature): добавление новой функциональности
fix(component): исправление бага
refactor(signals): рефакторинг на signals
docs(readme): обновление документации
style(scss): стилистические изменения
test(service): добавление тестов
chore(deps): обновление зависимостей
```

### Обмен данными
- Использовать **Signals** для обмена данными между компонентами
- Локальные данные и простой фронтенд без сложного state management

## 🔄 План миграции

### Старая структура (сохранена временно)
```
app/
  ├── pages/
  ├── shared/
  ├── services/
  ├── data/
  ├── models/
  ├── header/
  └── footer/
```

### Процесс миграции
1. ✅ Обновление до Angular 21
2. ✅ Создание новой структуры папок (параллельно старой)
3. 🔄 Постепенная миграция компонентов
4. 🔄 Рефакторинг на Signals и новый синтаксис
5. 🔄 Удаление старой структуры

## 🎯 Основные страницы

- **Home** - главная страница с секциями (обо мне, портфолио, опыт, университет, навыки)
- **Project Detail** - детальное описание проекта
- **Blog** - список статей блога
- **Blog Detail** - детальное описание статьи
