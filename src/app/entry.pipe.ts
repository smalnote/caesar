import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entryPipe'
})
export class EntryPipe implements PipeTransform {

  transform(value: Object, args?: any): Array<KV> {
    let list = [];
    for (let key in value) {
      list.push(new KV(key, value[key]));
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
