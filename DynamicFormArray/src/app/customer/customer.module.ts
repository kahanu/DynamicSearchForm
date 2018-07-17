import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormModule } from '../shared/dynamic/dynamic-form.module';

@NgModule({
  imports: [
    DynamicFormModule,
    SharedModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
