import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ConfigItem } from '../models/models';
import { typeGroup } from '../config/dynamic-config';

@Component({
  selector: 'app-row-search',
  templateUrl: './row-search.component.html',
  styleUrls: ['./row-search.component.css']
})
export class RowSearchComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() row: any;
  @Input() defaultFieldValue: string;
  @Input() config: ConfigItem[];

  rowForm: FormGroup;
  labelArray: ConfigItem[];
  supportedTypes: any[] = [];
  placeHolder = 'Field Value';
  rowConfig: ConfigItem;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getRowForm();
    this.labelArray = this.config;
    this.initForm();
  }

  getRowForm() {
    this.rowForm = this.form.get('items')['controls'][this.row];
  }

  initForm() {
    this.onLabelChange(this.defaultFieldValue);
  }

  onLabelChange(value: any) {
    if (value) {
      this.rowConfig = this.config.find(
        item => item.value === value
      );

      const rowObj = this.rowForm;
      rowObj.controls['dataType'].setValue(this.rowConfig.dataType);
      rowObj.controls['inputType'].setValue(this.rowConfig.inputType);

      this.getSelectedOperations(this.rowConfig.inputType);
    } else {
      this.getSelectedOperations('text');
      this.rowConfig.inputType = 'text';
    }
  }

  removeItem() {
    const items = <FormArray>this.form.get('items');
    items.removeAt(this.row);
  }

  getSelectedOperations(type: any) {
    const typegroup = typeGroup.find(item => item.type === type);
    this.supportedTypes = typegroup.supportedTypes;
  }

  createItem(item?: any): FormGroup {
    return this.fb.group({
      labelName: [item ? item.labelName : this.defaultFieldValue],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : 'EqualTo'],
      dataType: [item ? item.dataType : 'String'],
      inputType: [item ? item.inputType : 'text'],
      connector: [item ? item.connector : 'Or']
    });
  }

  addItem(value?: any) {
    const labelValue = value || this.defaultFieldValue;

    const items = <FormArray>this.form.get('items');
    let labelObj: ConfigItem;
    if (labelValue) {
      labelObj = this.config.find(item => item.value === labelValue);
    } else {
      labelObj = new ConfigItem();
      labelObj.value = '';
      labelObj.dataType = 'String';
      labelObj.inputType = 'text';
    }

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
