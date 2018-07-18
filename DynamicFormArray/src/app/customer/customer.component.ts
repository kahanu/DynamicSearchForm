import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SearchCriteria } from '../shared/models';
import { labelArrayData, typeGroup } from '../shared/form-config';
import { SelectState } from '../shared/pubsub/models';
import { PubSubService } from '../core/pub-sub.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  results: any[];
  criteriaList: SearchCriteria[];
  labelArray = labelArrayData;
  supportedTypes: any[] = [];
  selectedDataType: string;

  constructor(private fb: FormBuilder, private pubSub: PubSubService) {}

  ngOnInit() {
    this.initForm();
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

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  save() {
    this.results = this.customerForm.value;
    this.mapToCriteria(this.results);
  }

  addRow() {
    this.addItem();
  }

  addItem() {
    const items = <FormArray>this.customerForm.get('items');
    items.push(this.createItem());
  }

  removeRow(row: number) {
    this.removeItem(row);
  }

  removeItem(index: number) {
    const items = <FormArray>this.customerForm.get('items');
    items.removeAt(index);
  }

  // onLabelChange(value: any, index: number) {
  //   const labelObj: SelectState = labelArrayData.find(
  //     item => item.value === value
  //   );
  //   console.log('label: ', labelObj);
  //   // this.pubSub.publishSelect(labelObj);
  // }

  mapToCriteria(formData: any) {
    const criteriaList: SearchCriteria[] = [];
    formData['items'].forEach(element => {
      const criteria = new SearchCriteria();
      criteria.FieldName = element.labelName;
      criteria.FieldValue = element.fieldValue;
      criteria.OperationName = element.operation;
      criteria.Type = element.dataType;
      criteria.Connector = element.connector;
      criteriaList.push(criteria);
    });
    this.criteriaList = criteriaList;
  }

  // getSelectedOperations(type: any, index: number) {
  //   const typegroup = typeGroup.find(item => item.type === type);
  //   // console.log('typegroup: ', typegroup);
  //   this.loadSupportedTypes(typegroup, index);
  // }

  // loadSupportedTypes(typegroup: any, index: number) {
  //   const control = this.customerForm.get('items')['controls'][index];
  //   // console.log('control: ', control);
  //   this.supportedTypes = typegroup.supportedTypes;
  // }
}
