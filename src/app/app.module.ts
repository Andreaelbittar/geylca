import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ElectronicComponent } from './home/electronic/electronic.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { FooterComponent } from './home/footer/footer.component';
import { ButtomProductComponent } from './home/buttom-product/buttom-product.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { FormComponent } from './home/form/form.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardProductsComponent } from './products/card-products/card-products.component';
import { CartComponent } from './products/cart/cart.component';


const appRoutes:Routes=[
  {path:'home', component:HomeComponent },
  {path:'products', component:ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElectronicComponent,
    AboutUsComponent,
    FooterComponent,
    ButtomProductComponent,
    OurServicesComponent,
    FormComponent,
    ProductsComponent,
    HomeComponent,
    CardProductsComponent,
    CartComponent,

  ],
  imports: [BrowserModule,AppRoutingModule,RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
