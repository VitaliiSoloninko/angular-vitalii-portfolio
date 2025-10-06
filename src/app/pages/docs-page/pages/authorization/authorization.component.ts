import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>🔐 Authorization</h1>
      <p class="lead">
        Guide to implementing authentication and authorization in your
        application.
      </p>

      <div class="overview-card">
        <h3>🎟️ JWT Tokens</h3>
        <p>
          JSON Web Tokens for stateless authentication. Perfect for modern web
          applications and APIs.
        </p>
        <ul>
          <li>Token-based authentication</li>
          <li>Stateless and scalable</li>
          <li>Built-in expiration handling</li>
        </ul>
      </div>

      <div class="info-box">
        <h4>🔒 Security Best Practices</h4>
        <ul>
          <li>Always use HTTPS in production</li>
          <li>Store tokens securely</li>
          <li>Use short-lived access tokens</li>
          <li>Validate tokens on every request</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-content {
        max-width: 800px;
        line-height: 1.7;
      }

      .lead {
        font-size: 1.2rem;
        color: #4a5568;
        margin-bottom: 2rem;
      }

      .overview-card {
        background: #f7fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 2rem 0;
      }

      .overview-card h3 {
        margin-top: 0;
        color: #2d3748;
      }

      .overview-card ul {
        margin: 1rem 0 0 0;
        padding-left: 1.2rem;
      }

      .overview-card li {
        margin-bottom: 0.3rem;
        color: #4a5568;
      }

      .info-box {
        background: #edf2f7;
        border-left: 4px solid #3182ce;
        padding: 1.5rem;
        margin: 2rem 0;
        border-radius: 0 8px 8px 0;
      }

      .info-box h4 {
        margin-top: 0;
        color: #2d3748;
      }
    `,
  ],
})
export class AuthorizationComponent {}
