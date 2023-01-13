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
      des:'Motor de 800kg ideal para casas y condominios pequeños', 
    },
    {
      name: 'Control Nova',
      price: '30$',
      image: 'assets/img/product-control-nova.png',
      qnt: 3,
      des:'Resistentes botones de silicona hechos para durar ,apariencia de carbón impecable y elegante y frecuencia de operación a 433 MHz ', 
    },
    {
      name: 'Control Unik',
      price: '25$',
      image: 'assets/img/codiplug-unik.png',
      qnt: 3,
      des: 'Excelente material y durabilidad,Frecuencia 433',
    },
    {
      name: 'Control Novus 2',
      price: '25$',
      image: 'assets/img/codiplug-novus2.png',
      qnt: 3,
      des: 'Excelente material y durabilidad,Frecuencia 433',
    },
    {
      name: 'Energizador',
      price: '700$',
      image: 'assets/img/energizador.png',
      qnt: 3,
      des: ' Energizador Yonusa para cercos electricos 300 metros lineales, Excelente equipo,75 metros a 4 hilos ( 300 metros lineales) Alimentación de entrada 110 voltios',
    },
    {
      name: 'Camar de',
      price: '120$',
      image: 'assets/img/camara.png',
      qnt: 3,
      des:'Cámara Tipo Domo Hikvision HD MultiFormato Compatible con todo tipo de Dvr',
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
