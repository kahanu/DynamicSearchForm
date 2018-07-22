import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SearchCriteria, ConfigItem } from '../shared/dynamic/models/models';
import { productFieldNamesConfig } from './products-form.config';
import { Helpers } from '../shared/dynamic/helpers/Helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  results: any[];
  criteriaList: SearchCriteria[];
  config: ConfigItem[] = productFieldNamesConfig;
  supportedTypes: any[] = [];
  selectedDataType: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  save() {
    this.results = this.productForm.value;
    this.criteriaList = Helpers.mapToCriteria(this.results);
    // TODO: send criteriaList to the web service.
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : 'ProductName'],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : 'EqualTo'],
      dataType: [item ? item.dataType : 'String'],
      inputType: [item ? item.inputType : 'text'],
      connector: [item ? item.connector : 'Or']
    });
  }

  addItem() {
    const items = <FormArray>this.productForm.get('items');
    items.push(this.createItem());
  }


}
