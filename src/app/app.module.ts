import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsboxComponent } from './shared/productsbox/productsbox.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartService } from './shared/cartService/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsboxComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Aquí van los servicios
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
