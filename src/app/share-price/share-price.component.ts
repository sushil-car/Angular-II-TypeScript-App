import { Component, OnInit, Optional, Output, EventEmitter, NgModule } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import {PriceQuantityViewComponent} from '../price-quantity-view/price-quantity-view.component';

@Component({
  selector: 'app-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: ['./share-price.component.css']
})
export class SharePriceComponent implements OnInit {
  fakeArray = new Array(2);
  averagePrice;
  totalHolding;
  holdingPrice;
  allAvailableHoldings = [];
  @Output() avgChange:  EventEmitter<any>;

  ngOnInit() {
  }

  constructor() {
    this.avgChange = new EventEmitter();
  }

  increment() {
    this.fakeArray.push(3);
      console.log(this.fakeArray);
    }

  onNotify(priceQuantityObj: {id, quantity, price}) {
      if (!priceQuantityObj.quantity) {
        priceQuantityObj.quantity = 0;
      }

      if (!priceQuantityObj.price) {
        priceQuantityObj.price = 0;
      }

      if (!this.allAvailableHoldings.length) {
        this.allAvailableHoldings = [];
        this.allAvailableHoldings.push(priceQuantityObj);
      }

      let idExists = false;

      for (const i in this.allAvailableHoldings) {
        if (this.allAvailableHoldings[i].id === priceQuantityObj.id) {
          this.allAvailableHoldings[i].quantity = priceQuantityObj.quantity;
          this.allAvailableHoldings[i].price = priceQuantityObj.price;
          idExists = true;
           break;
        }
      }

      if (!idExists) {
        this.allAvailableHoldings.push(priceQuantityObj);
      }

      this.avgChange.emit(this.allAvailableHoldings);
      this.calcAverage();
  }

  calcAverage() {
    let totalSum = 0, totalCnt = 0;

    for (const key in this.allAvailableHoldings) {
      if (this.allAvailableHoldings[key].price) {
        totalSum = totalSum + Number(this.allAvailableHoldings[key].price) * Number(this.allAvailableHoldings[key].quantity);
        totalCnt = totalCnt + Number(this.allAvailableHoldings[key].quantity);
        }
    }

    this.averagePrice = totalSum / totalCnt;
    this.totalHolding = totalCnt;
    this.holdingPrice = totalSum;
  }

}
