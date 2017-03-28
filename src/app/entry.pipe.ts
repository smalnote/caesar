import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entryPipe'
})
export class EntryPipe implements PipeTransform {

  transform(value: Object, keys?: Array<string>): Array<KV> {
    let list = [];
    if (keys) {
      for (let key of keys) {
        if (value[key]) {
          list.push(new KV(key, value[key]));
        }
      }
    } else {
      for (let key in value) {
        list.push(new KV(key, value[key]));
      }
    }

    return list;
  }

}

export class KV {
  constructor(
    public key: string,
    public value: any,
  ) { }
}
