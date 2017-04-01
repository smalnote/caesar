import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraymodel',
  templateUrl: './arraymodel.component.html',
  styleUrls: ['./arraymodel.component.css']
})
export class ArraymodelComponent implements OnInit {

  model: string[] = [];

  constructor() { }

  trackByIndex(index: number, value: string) {
    return index;
  }

  ngOnInit() {
  }

}
