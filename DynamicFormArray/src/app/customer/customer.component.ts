import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : ''],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : ''],
      dataType: [item ? item.dataType : ''],
      inputType: [item ? item.inputType : '']
    });
  }

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([
        this.createItem({ labelName: 'Phone', fieldValue: '818 384-4438', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
        this.createItem({ labelName: 'FirstName', fieldValue: 'John', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
        this.createItem({
          labelName: 'StartDate',
          fieldValue: new Date('2018-04-29T15:26:32'), operation: 'LessThan', dataType: 'DateTimeOffset', inputType: 'date'}),
        this.createItem({
          labelName: 'ContributionAmount', fieldValue: '123.45', operation: 'GreaterThan', dataType: 'Decimal', inputType: 'number'})
      ])
    });
  }

  save() {
    console.log(this.customerForm.value);
  }

  addItem() {
    const items = <FormArray>this.customerForm.get('items');
    items.push(this.createItem());
  }

  removeItem(index: number) {
    const items = <FormArray>this.customerForm.get('items');
    items.removeAt(index);
  }
}
