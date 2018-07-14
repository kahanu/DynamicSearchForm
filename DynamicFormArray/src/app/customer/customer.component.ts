import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      labelName: item.labelName,
      fieldValue: item.fieldValue,
      operation: item.operation,
      dataType: item.dataType,
      inputType: item.inputType
    });
  }

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([
        this.createItem({ labelName: 'Phone', fieldValue: '818 384-4438', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
        this.createItem({ labelName: 'FirstName', fieldValue: 'John', operation: 'EqualTo', dataType: 'String', inputType: 'text'}),
        this.createItem({
          labelName: 'To', fieldValue: new Date('2018-04-29'), operation: 'LessThan', dataType: 'DateTimeOffset', inputType: 'date'}),
        this.createItem({
          labelName: 'ContributionAmount', fieldValue: '123.45', operation: 'GreaterThan', dataType: 'Decimal', inputType: 'number'})
      ])
    });
  }

  save() {
    console.log(this.customerForm.value);
  }

}
