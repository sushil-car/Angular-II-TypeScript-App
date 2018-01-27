import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quantity-view',
  templateUrl: './price-quantity-view.component.html',
  styleUrls: ['./price-quantity-view.component.css']
})
export class PriceQuantityViewComponent implements OnInit {
  singleHolding = {price: 0, quantity: 0, id: 0};
  @Input() id: number;
  @Output() sendCurrentAvgPrice: EventEmitter<any> = new EventEmitter<object>();
  priceTextBox;
  quantityTextBox;

  constructor() {
  }

  ngOnInit() {
  }

  calculateCurrentAvgPrice () {
    this.singleHolding = {'price': this.priceTextBox, 'quantity': this.quantityTextBox, 'id' : this.id};
    this.sendCurrentAvgPrice.emit(this.singleHolding);
  }
}
