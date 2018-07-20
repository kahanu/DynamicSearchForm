import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DynamicFormModule } from '../shared/dynamic/dynamic-form.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DynamicFormModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
