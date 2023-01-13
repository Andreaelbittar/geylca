import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

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
      des:'loremmm hola hola gola hola hola', 
    },
    {
      name: 'Control Nova',
      price: '30$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
    },
    {
      name: 'Control Unik',
      price: '25$',
      image: 'assets/img/codiplug-unik.png',
      qnt: 3,
    },
    {
      name: 'Control Novus 2',
      price: '25$',
      image: 'assets/img/codiplug-novus2.png',
      qnt: 3,
    },
    {
      name: 'Energizador',
      price: '700$',
      image: 'assets/img/energizador.png',
      qnt: 3,
    },
    {
      name: 'Control Nova',
      price: '120$',
      image: 'assets/img/camara.png',
      qnt: 3,
    },
  ];

  inc(prod: any) {
    console.log(prod.name);
  }

  constructor() {}
  private newMethod() {
    print();
  }

  ngOnInit(): void {}
}
