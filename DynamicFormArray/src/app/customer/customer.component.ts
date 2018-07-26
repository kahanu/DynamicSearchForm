import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SearchCriteria, ConfigItem } from '../shared/dynamic/models/models';
import { customerConfig } from './form-config';
import { Helpers } from '../shared/dynamic/helpers/Helper';
import { CustomerService } from '../core/services/organization/customer.service';
import { Customer } from '../shared/models/models';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  customerForm: FormGroup;
  results: any[];
  criteriaList: SearchCriteria[];
  config: ConfigItem[] = customerConfig;
  supportedTypes: any[] = [];
  selectedDataType: string;
  customerList: Customer[];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {}

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  save() {
    this.results = this.customerForm.value;
    this.criteriaList = Helpers.mapToCriteria(this.results);

    const payload = {
      SearchCriteria: this.criteriaList
    };

    this.customerService.save(payload, 'customers')
      .subscribe(res => {
        if (res.Success) {
          this.customerList = res['CustomerList'] as Customer[];
        }
      });
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : 'CustomerName'],
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
