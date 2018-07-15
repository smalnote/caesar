import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Black', 'White'];

  color = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => (this.color = this.colors[+params['index']])
    );
  }

  onBack() {
    this.location.back();
  }
}
