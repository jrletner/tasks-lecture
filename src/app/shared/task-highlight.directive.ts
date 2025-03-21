import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskHighlight]',
  standalone: false,
})
export class TaskHighlightDirective implements OnInit {
  @Input() appTaskHighlight!: boolean; // Expecting `task.completed` boolean

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appTaskHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightgreen');
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
    }
  }
}
