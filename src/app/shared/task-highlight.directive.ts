import { Directive, ElementRef, Input, OnInit, Renderer2, OnChanges } from '@angular/core';

// This directive can be applied to any HTML element using the [appTaskHighlight] attribute.
// It's not a standalone directive, so it should be declared inside a module.
@Directive({
  selector: '[appTaskHighlight]',
  standalone: false,
})
export class TaskHighlightDirective implements OnChanges {
  // Input binding to accept a boolean value.
  // Typically used like [appTaskHighlight]="task.completed" in a template.
  @Input() appTaskHighlight!: boolean; // Expecting a 'task.completed' boolean input

  // Inject ElementRef to get a reference to the DOM element this directive is attached to
  // Inject Renderer2 to safely apply styles (avoids direct DOM manipulation)
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Lifecycle hook that runs once the input has been set
  ngOnChanges() {
    if (this.appTaskHighlight) {
      // If the task is marked as completed, highlight it visually
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgreen');
    } else {
      // Otherwise, show it with a normal white background
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    }
  }
}
