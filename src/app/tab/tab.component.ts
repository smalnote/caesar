import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs = [ "Red", "Green", "Blue", "Yellow", "Purple" ]

  activeTab = 0

  onTabClose(tabIndex: number) {
    this.tabs.splice(tabIndex, 1);
    if (tabIndex > this.tabs.length) {
      tabIndex = this.tabs.length - 1;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
