import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model: Pack;
  message: string;

  constructor() { }

  ngOnInit() {
    this.model = new Pack(this.newHeader());
    let xs = [];
    xs.push(this.newX());
    this.model.interfaces.push(xs);
  }

  getInputWidth(fedLen: number): number {
    const MIN_WIDTH = 80;
    const MAX_WIDTH = 200;
    const CHAR_WIDTH = 10;
    let width = fedLen * 10;
    width = width < MIN_WIDTH ? MIN_WIDTH : width;
    width = width > MAX_WIDTH ? MAX_WIDTH : width;
    return width;
  }

  onSubmit() {
    this.message = 'submitted';
  }

  newHeader(): Interface {
    let header = new Interface('$HEADER$');
    header.itfFed.push(new Field('PRCCOD', 'A', 8));
    header.itfFed.push(new Field('RTNCOD', 'A', 7));
    header.itfFed.push(new Field('RTNLVL', 'S', 2));
    header.itfFed.push(new Field('ISUCNL', 'A', 3));
    return header;
  }

  newX(): Interface {
    let x = new Interface('CMFFDLSTX');
    x.itfFed.push(new Field('XCALFRM', 'A', 3));
    x.itfFed.push(new Field('XFILLIB', 'A', 10));
    x.itfFed.push(new Field('XFILNAM', 'A', 10));
    x.itfFed.push(new Field('XSPCCOD', 'O', 80));
    return x;
  }

}

class Pack {
  header: Interface;
  interfaces: Array<Array<Interface>>;

  constructor(
    header: Interface = null,
    interfaces: Array<Array<Interface>> = []
  ) {
    this.header = header;
    this.interfaces = interfaces;
  }
}

class Interface {
  itfNam: string;
  itfFed: Array<Field>;
  constructor(
    itfNam: string,
    itfFed: Array<Field> = []
  ) {
    this.itfNam = itfNam;
    this.itfFed = itfFed;
  }
}

class Field {
  fedNam: string;
  fedTyp: string;
  fedLen: number;
  fedDec: number;
  fedRmk: string;
  fedVal?: string;
  constructor(
    fedNam: string,
    fedTyp: string,
    fedLen: number,
    fedDec: number = 0,
    fedRmk: string = null,
    fedVal?: string
  ) {
    this.fedNam = fedNam;
    this.fedTyp = fedTyp;
    this.fedLen = fedLen;
    this.fedDec = fedDec;
    this.fedRmk = fedRmk;
    if (fedVal) { this.fedVal = fedVal; }
  }
}
