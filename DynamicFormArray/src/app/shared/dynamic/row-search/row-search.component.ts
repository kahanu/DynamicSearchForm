import { Component, OnInit, Input } from '@angular/core';
import { labelArrayData } from '../../../customer/form-config';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { LabelItem } from '../models/models';
import { typeGroup } from '../config/dynamic-config';


@Component({
  selector: 'app-row-search',
  templateUrl: './row-search.component.html',
  styleUrls: ['./row-search.component.css']
})
export class RowSearchComponent implements OnInit {
  @Input() rowForm: FormGroup;
  @Input() parentForm: FormGroup;
  @Input() row: any;
  @Input() defaultValue = 'Phone';
  labelArray = labelArrayData;
  selectedDataType: string;
  supportedTypes: any[] = [];
  placeHolder = 'Field Value';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.onLabelChange(this.defaultValue);
  }

  onLabelChange(value: any) {
    const labelObj: LabelItem = labelArrayData.find(
      item => item.value === value
    );

    const rowObj = this.rowForm;
    rowObj.controls['dataType'].setValue(labelObj.dataType);
    rowObj.controls['inputType'].setValue(labelObj.inputType);

    this.getSelectedOperations(labelObj.inputType);
    this.selectedDataType = labelObj.inputType;
    this.placeHolder = labelObj.placeHolder;
  }

  removeItem() {
    const items = <FormArray>this.parentForm.get('items');
    items.removeAt(this.row);
  }

  getSelectedOperations(type: any) {
    const typegroup = typeGroup.find(item => item.type === type);
    this.loadSupportedTypes(typegroup);
  }

  loadSupportedTypes(typegroup: any) {
    this.supportedTypes = typegroup.supportedTypes;
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : this.defaultValue],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : 'EqualTo'],
      dataType: [item ? item.dataType : 'String'],
      inputType: [item ? item.inputType : 'text'],
      connector: [item ? item.connector : 'Or']
    });
  }

  addItem(value?: any) {
    const labelValue = value || this.defaultValue;

    const items = <FormArray>this.parentForm.get('items');
    const labelObj: LabelItem = labelArrayData.find(
      item => item.value === labelValue
    );
    const obj = {
      labelName: labelObj.value,
      fieldValue: '',
      operation: 'EqualTo',
      dataType: labelObj.dataType,
      inputType: labelObj.inputType,
      connector: 'Or'
    };
    items.push(this.createItem(obj));
  }
}
