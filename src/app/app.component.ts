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

  time: string;
  error: any;

  constructor(private caesarService: CaesarService) { }

  ngOnInit() {
    this.caesarService.getTime()
      .subscribe(
        res => {
          if (res["status"] != "OK") {
            this.error = res["message"];
          } else {
            this.time = res["time"];
          }
        },
        error => this.error = <any>error
      );
  }
}
