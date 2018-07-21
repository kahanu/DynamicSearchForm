import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SearchCriteria, LabelItem } from '../shared/dynamic/models/models';
import { customerFieldNamesConfig } from './form-config';
import { Helpers } from '../shared/dynamic/helpers/Helper';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  results: any[];
  criteriaList: SearchCriteria[];
  config: LabelItem[];
  supportedTypes: any[] = [];
  selectedDataType: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.config = customerFieldNamesConfig;
    this.initForm();
  }

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  save() {
    this.results = this.customerForm.value;
    Helpers.mapToCriteria(this.results);
    // TODO: send criteriaList to the web service.
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : 'Phone'],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : 'EqualTo'],
      dataType: [item ? item.dataType : 'String'],
      inputType: [item ? item.inputType : 'text'],
      connector: [item ? item.connector : 'Or']
    });
  }

  addItem() {
    const items = <FormArray>this.customerForm.get('items');
    items.push(this.createItem());
  }



}
