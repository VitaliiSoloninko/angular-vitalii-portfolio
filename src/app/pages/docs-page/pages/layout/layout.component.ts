import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>📐 Layout System</h1>
      <p class="lead">
        Modern CSS layout techniques including CSS Grid and Flexbox.
      </p>

      <div class="layout-overview">
        <div class="layout-card">
          <h3>🔲 CSS Grid</h3>
          <p>Two-dimensional layout system perfect for complex layouts</p>
          <ul>
            <li>Grid containers and items</li>
            <li>Responsive grid systems</li>
            <li>Grid areas and positioning</li>
          </ul>
        </div>

        <div class="layout-card">
          <h3>📏 Flexbox</h3>
          <p>One-dimensional layout method for arranging items</p>
          <ul>
            <li>Flex containers and items</li>
            <li>Alignment and distribution</li>
            <li>Responsive flex layouts</li>
          </ul>
        </div>
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

      .layout-overview {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .layout-card {
        background: #f7fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem;
      }

      .layout-card h3 {
        margin-top: 0;
        color: #2d3748;
      }

      .layout-card ul {
        margin: 1rem 0 0 0;
        padding-left: 1.2rem;
      }

      .layout-card li {
        margin-bottom: 0.3rem;
        color: #4a5568;
      }

      @media (max-width: 768px) {
        .layout-overview {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class LayoutComponent {}
