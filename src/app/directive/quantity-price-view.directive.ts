import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuantityPriceView]'
})
export class QuantityPriceViewDirective {

  constructor(private elRef: ElementRef) { }

}
