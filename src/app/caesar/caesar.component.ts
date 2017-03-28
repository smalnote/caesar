import { Component, OnInit } from '@angular/core';

import { EntryPipe } from '../entry.pipe';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {

  profile = {
    "name": "Caesar",
    "birthday": "Unknow",
    "power": "Lying"
  }

  constructor() { }

  ngOnInit() {
  }

}
