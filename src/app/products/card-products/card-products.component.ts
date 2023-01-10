import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.sass'],
})
export class CardProductsComponent implements OnInit {
  products = [
    {
      name: 'Motor BFT',
      price: '1200$',
      image: 'assets/img/product-motor-btf.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
  ];

  inc(prod: any) {
     console.log(prod.qnt);
    
  }

  constructor() {}
  ngOnInit(): void {}
}
