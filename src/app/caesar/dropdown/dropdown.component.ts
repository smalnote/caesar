import { Component, OnInit } from '@angular/core';

import { Addr } from '../addr';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  platform: string;
  enviroment: string;
  entry: string;
  target: string;

  addr: Addr;

  addrs = {
    PAAS: {
      DEV: {
        'LK01-PortfolioOltp': new Addr(
          'http://LK01-PortfolioOltp.paas.cmbchina.cn/rmi.do',
          '',
          0
        ),
        'LT17-Data': new Addr('http://LT17-Data.paas.cmbchina.cn/rmi.do', '', 0)
      },
      ST: {
        'LK01-PortfolioOltp': new Addr(
          'http://LK01-PortfolioOltp.paasst.cmbchina.cn/rmi.do',
          '',
          0
        ),
        'LT17-Data': new Addr(
          'http://LT17-Data.paasst.cmbchina.cn/rmi.do',
          '',
          0
        )
      },
      UAT: {
        'LK01-PortfolioOltp': new Addr(
          'http://LK01-PortfolioOltp.paasuat.cmbchina.cn/rmi.do',
          '',
          0
        ),
        'LT17-Data': new Addr(
          'http://LT17-Data.paasuat.cmbchina.cn/rmi.do',
          '',
          0
        )
      }
    },
    AS400: {
      DEV: {
        L2FNDINTCR: new Addr('', '192.168.0.1', 16045),
        L2FNDBAKCR: new Addr('', '192.168.0.1', 16411)
      },
      ST: {
        L2FNDINTCR: new Addr('', '192.168.0.1', 16045),
        L2FNDBAKCR: new Addr('', '192.168.0.1', 16411)
      },
      STB: {
        L2FNDINTCR: new Addr('', '192.168.0.1', 16045),
        L2FNDBAKCR: new Addr('', '192.168.0.1', 16411)
      },
      UAT: {
        L2FNDINTCR: new Addr('', '192.168.0.1', 16045),
        L2FNDBAKCR: new Addr('', '192.168.0.1', 16411)
      }
    }
  };

  selectDefault() {
    for (const platform in this.addrs) {
      if (platform) {
        this.platform = platform;
        break;
      }
    }
    for (const env in this.addrs[this.platform]) {
      if (env) {
        this.enviroment = env;
        break;
      }
    }
    for (const entry in this.addrs[this.platform][this.enviroment]) {
      if (entry) {
        this.entry = entry;
        break;
      }
    }
    this.addr = this.addrs[this.platform][this.enviroment][this.entry];
  }

  onSelectPlatform() {
    if (!this.platform) {
      return;
    }
    for (const env in this.addrs[this.platform]) {
      if (env) {
        this.enviroment = env;
        break;
      }
    }
    for (const entry in this.addrs[this.platform][this.enviroment]) {
      if (entry) {
        this.entry = entry;
        break;
      }
    }
    this.addr = this.addrs[this.platform][this.enviroment][this.entry];
  }

  onSelectEnv() {
    if (!this.platform || !this.enviroment) {
      return;
    }
    for (const entry in this.addrs[this.platform][this.enviroment]) {
      if (entry) {
        this.entry = entry;
        break;
      }
    }
    this.addr = this.addrs[this.platform][this.enviroment][this.entry];
  }

  onSelectEntry() {
    if (!this.platform || !this.enviroment || !this.entry) {
      return;
    }
    this.addr = this.addrs[this.platform][this.enviroment][this.entry];
  }

  constructor() {}

  ngOnInit() {
    this.selectDefault();
  }
}
