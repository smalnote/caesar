import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-ani',
  templateUrl: './ani.component.html',
  styleUrls: ['./ani.component.css'],
  animations: [
    trigger('buttonState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AniComponent implements OnInit {

  state = 'active';

  constructor() { }

  ngOnInit() {
  }

  toggleState(): void {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
