import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'control-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input() value = 10;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
    setTimeout(() => {
      this.value += 20;
      this.valueChange.emit(this.value);
    }, 2000);
  }

  ngOnInit() {}
}
