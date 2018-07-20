import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectComponent } from './form-select/form-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RowSearchComponent } from './row-search/row-search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormSelectComponent,
    RowSearchComponent
  ],
  exports: [
    RowSearchComponent
  ],
  entryComponents: [
    FormSelectComponent
  ]
})
export class DynamicFormModule { }
