import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {PriceQuantityViewComponent} from '../price-quantity-view/price-quantity-view.component';

@Component({
  selector: 'app-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: ['./share-price.component.css']
})
export class SharePriceComponent implements OnInit {
  idSentFromParent = 1111111111;
  fakeArray = new Array(2);

  constructor() { }

  increment() {
    this.fakeArray.push(3);
    console.log(this.fakeArray);
  }

  ngOnInit() {
  }

}
