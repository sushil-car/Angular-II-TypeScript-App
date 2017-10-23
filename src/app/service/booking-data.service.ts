import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class BookingDataService {

  constructor(public http:Http) { }

  getData() {
    return this.http.get("http://localhost:4200/assets/mock.json")
      .map((res) => {
        return res.json();
      });
  }

  
}
