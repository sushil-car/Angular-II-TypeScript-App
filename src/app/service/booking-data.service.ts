import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class BookingDataService {

  constructor(public http:Http) { }

  getData() {
    return this.http.get(" https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=5b03450c5fbd4e1293ce09ff90d3b274")
      .map((res) => {
        var t = JSON.parse(res['_body']);
        return t.articles;
      });
  }

  
}
