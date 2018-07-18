import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectState } from '../../pubsub/models';
import { labelArrayData, typeGroup } from '../../form-config';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-row-search',
  templateUrl: './row-search.component.html',
  styleUrls: ['./row-search.component.css']
})
export class RowSearchComponent implements OnInit {
  @Input() rowForm: FormGroup;
  @Input() row: any;
  labelArray = labelArrayData;
  selectedDataType: string;
  supportedTypes: any[] = [];

  @Output() addRow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeRow: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.onLabelChange('Phone');
    console.log('row search init form');
    this.initForm();
  }

  initForm() {
    this.rowForm = this.createItem();
    this.onLabelChange('Phone');
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

  onLabelChange(value: any) {
    const labelObj: SelectState = labelArrayData.find(
      item => item.value === value
    );
    // console.log('label: ', labelObj);
    // this.pubSub.publishSelect(labelObj);
    this.getSelectedOperations(labelObj.dataType);
  }

  addItem() {
    this.addRow.emit(true);
  }

  removeItem() {
    // console.log('remove row: ', this.row);
    this.removeRow.emit(this.row);
  }

  getSelectedOperations(type: any) {
    const typegroup = typeGroup.find(item => item.type === type);
    // console.log('typegroup: ', typegroup);
    this.loadSupportedTypes(typegroup);
  }

  loadSupportedTypes(typegroup: any) {
    this.supportedTypes = typegroup.supportedTypes;
    console.log('supported types: ', this.supportedTypes);
  }
}
