import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickable]'
})
export class ClickableDirective {
  @Output() myClick = new EventEmitter<any>();

  @HostListener('mousedown') onMouseDown() {
    this.myClick.emit();
  }

  constructor() {}
}
