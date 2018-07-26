import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpRequestInterceptorService } from './core/interceptors/http-request-interceptor.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    CustomerModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
