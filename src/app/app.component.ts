import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { CaesarService } from './caesar.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Http],
})
export class AppComponent implements OnInit {
  title = 'Caesar I/O';

  activeTab: string = '';


  constructor(private caesarService: CaesarService) { }

  ngOnInit() {
  }
}
