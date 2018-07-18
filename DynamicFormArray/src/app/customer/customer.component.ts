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
      inputType: [item ? item.inputType : 'text']
    });
  }

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();

    // this.customerForm = this.fb.group({
    //   items: this.fb.array([
    //     this.createItem({ labelName: 'Phone', fieldValue: '818 384-4438', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
    //     this.createItem({ labelName: 'FirstName', fieldValue: 'John', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
    //     this.createItem({
    //       labelName: 'StartDate',
    //       fieldValue: new Date('2018-04-29T15:26:32').toISOString().substring(0, 10),
    //       operation: 'LessThan', dataType: 'DateTimeOffset', inputType: 'date'}),
    //     this.createItem({
    //       labelName: 'ContributionAmount', fieldValue: '123.45', operation: 'GreaterThan', dataType: 'Decimal', inputType: 'number'})
    //   ])
    // });
  }

  save() {
    console.log(this.customerForm.value);
    this.results = this.customerForm.value;
    this.mapToCriteria(this.results);
  }

  addRow() {
    console.log('adding row');
    this.addItem();
  }

  addItem() {
    const items = <FormArray>this.customerForm.get('items');
    items.push(this.createItem());
    // this.onLabelChange('Phone', 0);
  }

  removeRow(row: number) {
    this.removeItem(row);
  }

  removeItem(index: number) {
    const items = <FormArray>this.customerForm.get('items');
    items.removeAt(index);
  }

  onLabelChange(value: any, index: number) {
    const labelObj: SelectState = labelArrayData.find(
      item => item.value === value
    );
    console.log('label: ', labelObj);
    // this.pubSub.publishSelect(labelObj);
  }

  mapToCriteria(formData: any) {
    const criteriaList: SearchCriteria[] = [];
    formData['items'].forEach(element => {
      const criteria = new SearchCriteria();
      criteria.FieldName = element.labelName;
      criteria.FieldValue = element.fieldValue;
      criteria.OperationName = element.operation;
      criteria.Type = element.dataType;
      criteria.Connector = 'Or';
      criteriaList.push(criteria);
    });
    this.criteriaList = criteriaList;
  }

  getSelectedOperations(type: any, index: number) {
    const typegroup = typeGroup.find(item => item.type === type);
    // console.log('typegroup: ', typegroup);
    this.loadSupportedTypes(typegroup, index);
  }

  loadSupportedTypes(typegroup: any, index: number) {
    const control = this.customerForm.get('items')['controls'][index];
    // console.log('control: ', control);
    this.supportedTypes = typegroup.supportedTypes;
  }
}
