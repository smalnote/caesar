import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  times = 20;

  onClick() {
    this.times += 5;
    if (this.times > 100) {
      this.times = this.times % 100;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
