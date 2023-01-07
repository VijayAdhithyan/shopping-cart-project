import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  name;
  desc;
  price;
  img;
  sub;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.name = params.get('name');
      this.desc = params.get('desc');
      this.price = params.get('price');
      this.img = params.get('img');
    });
  }
  // @Input() product: any;
  // @Output() productAdded = new EventEmitter();
  // addProductToCart(product) {
  //   console.log(product);
  //   this.productAdded.emit(product);
  // }
  // @Input() cartProductList: any[];
  // @Output() productRemoved = new EventEmitter();

  // calcTotal() {
  //   return this.products.reduce((acc, prod) => (acc += prod.num), 0);

  // }
  // removeProduct(product) {
  //   this.productRemoved.emit(product);
  // }
}
