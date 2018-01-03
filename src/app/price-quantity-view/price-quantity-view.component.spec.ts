import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQuantityViewComponent } from './price-quantity-view.component';

describe('PriceQuantityViewComponent', () => {
  let component: PriceQuantityViewComponent;
  let fixture: ComponentFixture<PriceQuantityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQuantityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQuantityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
