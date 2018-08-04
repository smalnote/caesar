import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csstab',
  templateUrl: './csstab.component.html',
  styleUrls: ['./csstab.component.css']
})
export class CsstabComponent implements OnInit {
  activeTab = 'a';

  constructor() { }

  ngOnInit() {
  }

}
