import { Injectable } from '@angular/core';
import Divinity from './models/divinity';
import { Observable } from 'rxjs/Observable';

import * as request from 'request';
import * as csv from 'csvtojson';

@Injectable()
export class DivinitiesService {
  
  constructor() {}

  getDivinities(): Observable<Divinity[]> {
    return Observable.create((observer) => {
      try {
        const divinitiesFromJson = [];
        csv()
          .fromStream(request.get('https://docs.google.com/spreadsheets/d/1yI3RUJHqR5RPS1J1ibB9IG4_J_-62p1tTOiUTcwGbk0/export?format=csv'))
          .on('json', (jsonObject) => {
            let newObject = {};
            for (const key in jsonObject) {
              if (jsonObject.hasOwnProperty(key)) {
                newObject[this.transformName(key)] = jsonObject[key];
              }
            }
            divinitiesFromJson.push(newObject);
          })
          .on('error', () => {
            observer.error('CSV PARSING FAILED');
          })
          .on('done', () => {
            observer.next(divinitiesFromJson.map(Divinity.createDivinity));
          });
      } catch (exception) {
        observer.error('DIVINITIES PROCESSING FAILED');
      }
    });
  }

  private handleOperator(keyName: string) {
    const i = keyName.indexOf('?');
    if (i > -1) {
      return keyName.substring(0, i);
    } else {
      return keyName;
    }
  }

  private pascalCaseName(keyName: string) {
    const splitName = this.handleOperator(keyName).split(' ');
    splitName[0] = splitName[0].toLowerCase + splitName[0].substring(1);
    if (splitName.length === 1) {
      return splitName[0];
    } else {
      for (let i = 1; i < splitName.length; i++) {
        const curr = splitName[i];
        if (curr.length === 0) { continue; }
        splitName[i] = curr[0].toUpperCase + curr.substring(1);
      }
    }
    return splitName.join('');
  }

  private transformName(keyName: string) {
    return this.pascalCaseName(this.handleOperator(keyName));
  }

}
