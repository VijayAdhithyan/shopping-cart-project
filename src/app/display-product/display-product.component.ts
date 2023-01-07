import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css'],
})
export class DisplayProductComponent {
  productList = [
    {
      name: 'Boult Audio',
      price: 1799.00,
      img: 'https://m.media-amazon.com/images/I/716688QgaxL._SL1500_.jpg',
      desc: 'AirBass PowerBuds TWS Earbuds with 120 Hours Total Playtime, Inbuilt Powerbank, Type-C Fast Charging and IPX7 Fully Waterproof (Black)',
      btntext: 'Add to cart',
    },
    {
      name: 'boAt Airdopes',
      price: 999.00,
      img: 'https://m.media-amazon.com/images/I/510+wjzq-vL._SL1500_.jpg',
      desc: 'boAt Airdopes 121V2 Bluetooth Truly Wireless in Ear Earbuds with Mic with Upto 14 Hours Playback, Lightweight 8Mm Drivers, Led Indicators and Multifunction Controls (Active Black)',
      btntext: 'Add to cart',
    },
    {
      name: 'pTron',
      price: 1499.00,
      img: 'https://m.media-amazon.com/images/I/51j8koIKECL._SL1100_.jpg',
      desc: 'pTron Bassbuds Jade Gaming True Wireless Headphone with 40Hrs Total Playtime with Case, Low Latency, Deep Bass, BT5.0, Touch Control, Dual Mic, Passive Noise Cancellation & IPX4 Waterproof (Black)',
      btntext: 'Add to cart',
    },
    {
      name: 'Noise Buds',
      price: 12999,
      img: 'https://m.media-amazon.com/images/I/61ug52gyYtL._SL1500_.jpg',
      desc: 'Noise Buds VS303 Truly Wireless Earbuds with 24 Hour Playtime, Hyper Sync Technology, 13mm Speaker Driver and Full Touch Control (Space Blue)',
      btntext: 'Add to cart',
    },
    {
      name: 'truke',
      price: 1299.00,
      img: 'https://m.media-amazon.com/images/I/619QbzkxJjL._SL1500_.jpg',
      desc: 'truke Buds BTG3 True Wireless Earbuds with AI-Powered Noise Cancellation | Auto Play/Pause | 55ms Low Latency | Gaming Core Chipset | 48hrs Playtime | Gaming Characterized Design| Bluetooth 5.1 | IPX4',
      btntext: 'Add to cart',
    },
  ];
  cartProductList = [];

  count = 0;
  addProductToCart(product) {
    console.log(product);
    // product.btntext = 'Added';
    // const productExistInCart = this.cartProductList.find(
    //   ({ name }) => name === product.name
    // ); // find product by name
    // if (!productExistInCart) {
    //   this.cartProductList.push({ ...product, num: 1 });
    //   // enhance "porduct" opject with "num" property
    //   return;
    // }
    // productExistInCart.num += 1;
    // console.log(productExistInCart.num);
  }
  // removeProduct(product) {
  //   this.cartProductList = this.cartProductList.filter(
  //     ({ name }) => name !== product.name
  //   );
  // }
}
