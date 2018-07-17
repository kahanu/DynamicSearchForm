import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectComponent } from './form-select/form-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormSelectComponent
  ],
  exports: [
    FormSelectComponent
  ],
  entryComponents: [
    FormSelectComponent
  ]
})
export class DynamicFormModule { }
