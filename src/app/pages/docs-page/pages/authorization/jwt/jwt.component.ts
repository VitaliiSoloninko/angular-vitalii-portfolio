import { Component } from '@angular/core';
import { DocsContentUniversalComponent } from '../../../shared/docs-content/docs-content-universal.component';
import { DocsSection } from '../../../shared/docs-content/docs-content.interface';

@Component({
  selector: 'app-jwt',
  standalone: true,
  imports: [DocsContentUniversalComponent],
  templateUrl: './jwt.component.html',
  styleUrl: './jwt.component.scss',
})
export class JwtComponent {
  sections: DocsSection[] = [
    {
      title: '1. Теория',
      description:
        'JWT (JSON Web Token) — обычная закодированная строка, состоит из 3 частей:',
      items: [
        {
          text: '<strong>заголовок (header)</strong> → хранит тип и способ шифрования',
        },
        {
          text: '<strong>данные (payload)</strong> → пример: {{ "{" }}id: 1, username: Vitalii, roles: [\'admin\']{{ "}" }}',
        },
        {
          text: '<strong>подпись (signature)</strong> → создаётся с использованием секретного ключа (secret)',
        },
      ],
    },
    {
      title: '2. Токены',
      subsections: [
        {
          title: 'Access Token',
          items: [
            { text: 'Живёт 15–30 мин' },
            { text: 'Используется для доступа к сервису' },
            { text: 'Обычно хранится в localStorage' },
          ],
        },
        {
          title: 'Refresh Token',
          items: [
            { text: 'Живёт 15–60 дней' },
            { text: 'Используется для обновления Access Token' },
            { text: 'Хранится в cookie' },
            {
              text: 'Устанавливается с флагом HttpOnly (чтобы клиентский JS не мог изменить)',
            },
            { text: 'Сервер проверяет Refresh Token через базу данных' },
            { text: 'Может быть привязан к IP-адресу и устройству' },
          ],
        },
      ],
    },
    {
      title: '3. Взаимодействие клиент ↔ сервер',
      subsections: [
        {
          title: '3.1 Авторизация',
          items: [
            { text: 'Клиент отправляет email, password (в body)' },
            {
              text: 'Сервер генерирует пару токенов {{ "{" }}accessToken, refreshToken{{ "}" }}',
            },
            {
              text: 'Ответ:',
              subitems: [
                'accessToken → сохраняется в localStorage',
                'refreshToken → сохраняется в cookie',
              ],
            },
          ],
        },
        {
          title: '3.2 Запросы к API',
          items: [
            { text: 'Пример запроса:' },
            { text: 'GET /api/messages /api/orders' },
            {
              text: 'headers: {{ "{" }} Authorization: Bearer &lt;accessToken&gt; {{ "}" }}',
            },
            {
              text: 'Если токен валидный → status: 200, ответ: {{ "{" }}messages, orders{{ "}" }}',
            },
            {
              text: 'Если токен НЕ валидный → status: 401, ответ: {{ "{" }}message: "НЕ АВТОРИЗОВАН"{{ "}" }}',
            },
          ],
        },
        {
          title: '3.3 Обновление Access Token',
          items: [
            { text: 'На клиенте есть interceptor:' },
            { text: 'При ответе 401 → автоматический запрос на /api/refresh' },
            { text: 'В cookie отправляется refreshToken' },
            {
              text: 'Сервер проверяет refreshToken и возвращает новую пару токенов',
            },
          ],
        },
      ],
    },
    {
      title: '4. Обновление токенов',
      items: [
        { text: 'Сервер проверяет refreshToken по базе' },
        {
          text: 'Если валиден → возвращает новую пару {{ "{" }}accessToken, refreshToken{{ "}" }}',
        },
        { text: 'Повторяется каждые 30 мин' },
      ],
    },
  ];
}
