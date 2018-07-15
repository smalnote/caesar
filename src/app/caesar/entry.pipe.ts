import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entryPipe'
})
export class EntryPipe implements PipeTransform {
  transform(value: Object, keys?: Array<string>): Array<KV> {
    const list = [];
    if (keys) {
      for (const key of keys) {
        if (value[key]) {
          list.push(new KV(key, value[key]));
        }
      }
    } else {
      for (const key in value) {
        if (key) {
          list.push(new KV(key, value[key]));
        }
      }
    }

    return list;
  }
}

export class KV {
  constructor(public key: string, public value: any) {}
}
