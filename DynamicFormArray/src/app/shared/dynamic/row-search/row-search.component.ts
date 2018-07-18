import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectState } from '../../pubsub/models';
import { labelArrayData, typeGroup } from '../../form-config';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-row-search',
  templateUrl: './row-search.component.html',
  styleUrls: ['./row-search.component.css']
})
export class RowSearchComponent implements OnInit {
  @Input() rowForm: FormGroup;
  @Input() parentForm: FormGroup;
  @Input() row: any;
  labelArray = labelArrayData;
  selectedDataType: string;
  supportedTypes: any[] = [];

  // @Output() addRow: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output() removeRow: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.onLabelChange('Phone');
  }

  onLabelChange(value: any) {
    const labelObj: SelectState = labelArrayData.find(
      item => item.value === value
    );
    this.getSelectedOperations(labelObj.dataType);
    this.selectedDataType = labelObj.dataType;
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
      labelName: [item ? item.labelName : 'Phone'],
      fieldValue: [item ? item.fieldValue : ''],
      operation: [item ? item.operation : 'EqualTo'],
      dataType: [item ? item.dataType : 'String'],
      inputType: [item ? item.inputType : 'text'],
      connector: [item ? item.connector : 'Or']
    });
  }

  addItem() {
    const items = <FormArray>this.parentForm.get('items');
    items.push(this.createItem());
  }
}
