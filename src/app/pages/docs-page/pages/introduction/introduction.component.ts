import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="docs-content">
      <h1>🚀 Introduction</h1>
      <p>
        Welcome to the documentation! This is a comprehensive guide to help you
        get started with the platform.
      </p>

      <h2>What is this?</h2>
      <p>This documentation provides detailed information about:</p>
      <ul>
        <li>Getting started with the platform</li>
        <li>Available components and their usage</li>
        <li>API reference and examples</li>
        <li>Best practices and guidelines</li>
      </ul>

      <h2>Quick Navigation</h2>
      <p>
        Use the sidebar to navigate through different sections of the
        documentation. Each section contains detailed information and examples.
      </p>

      <h3>Getting Help</h3>
      <p>If you need help or have questions, you can:</p>
      <ul>
        <li>Check the FAQ section</li>
        <li>Look at the examples</li>
        <li>Contact support</li>
      </ul>

      <blockquote
        style="border-left: 4px solid #3182ce; padding-left: 16px; color: #718096; font-style: italic;"
      >
        💡 <strong>Tip:</strong> Use the breadcrumb navigation at the top to
        keep track of your current location in the documentation.
      </blockquote>
    </div>
  `,
  styles: [
    `
      .docs-content {
        max-width: 800px;
        line-height: 1.7;
      }

      blockquote {
        margin: 24px 0;
        background: #f7fafc;
        border-radius: 8px;
        padding: 16px;
      }
    `,
  ],
})
export class IntroductionComponent {}
