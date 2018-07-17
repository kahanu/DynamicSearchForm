import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { typeGroup } from '../../form-config';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() type: string;
  @Input() controlName: string;

  supportedTypes: any[] = [];

  constructor() { }

  ngOnInit() {
    // console.log('controlName: ', this.controlName);
    // console.log('form: ', this.form);
    // console.log('this.type: ', this.type);
    this.getSelectedOperations(this.type);
  }

  getSelectedOperations(type: any) {
    // console.log('type...: ', type);
    const typegroup = typeGroup.find(item => item.type === type);
    // console.log('typegroup: ', typegroup);
    this.loadSupportedTypes(typegroup);
  }

  loadSupportedTypes(typegroup: any) {
    this.supportedTypes = typegroup.supportedTypes;
    console.log(this.supportedTypes)
  }
}
