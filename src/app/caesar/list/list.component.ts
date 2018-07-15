import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Black', 'White'];

  constructor() {}

  ngOnInit() {}
}
