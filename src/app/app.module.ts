import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ElectronicComponent, AboutUsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
