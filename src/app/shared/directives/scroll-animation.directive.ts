import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;

  readonly animationType = input<string>('fade-up');
  readonly delay = input<number>(0);
  readonly threshold = input<number>(0.1);

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate');
    this.renderer.addClass(this.el.nativeElement, this.animationType());
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition-delay',
      `${this.delay()}ms`,
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate-in');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: this.threshold(),
        rootMargin: '0px 0px -50px 0px',
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
