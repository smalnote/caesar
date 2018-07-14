import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  times = 0;

  onClick() {
    this.times++;
  }

  constructor() { }

  ngOnInit() {
  }

}
