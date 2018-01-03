import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-quantity-view',
  templateUrl: './price-quantity-view.component.html',
  styleUrls: ['./price-quantity-view.component.css']
})
export class PriceQuantityViewComponent implements OnInit {
  test = 'welcome';
  @Input() id: number;

  constructor() {
    this.test = 'variable';
  }

  ngOnInit() {
  }

}
