import { Injectable } from '@angular/core';
import Divinity from './models/divinity';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DivinitiesService {
  
  constructor() {}

  getDivinities(): Observable<Divinity[]> {
    return Observable.create((observer) => {
      spreadsheetToJson({
        spreadsheetId: '1yI3RUJHqR5RPS1J1ibB9IG4_J_-62p1tTOiUTcwGbk0'
      }).then((response) => {
        observer.next(response.map(Divinity.createDivinity));
      }).catch((error) => {
        throw error;
      });
    });
  }

}
