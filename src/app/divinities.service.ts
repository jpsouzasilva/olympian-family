import { Injectable } from '@angular/core';
import Divinity from './models/divinity';
import { Observable } from 'rxjs/Observable';
import { StringUtils as SU } from '../app/utils/utils';

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
                newObject[SU.transformName(key)] = jsonObject[key];
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
  
}
