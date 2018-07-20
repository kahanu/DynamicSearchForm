import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SearchCriteria } from '../shared/dynamic/models/models';
import { labelArrayData } from '../customer/form-config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  results: any[];
  criteriaList: SearchCriteria[];
  labelArray = labelArrayData;
  supportedTypes: any[] = [];
  selectedDataType: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  save() {
    this.results = this.productForm.value;
    this.mapToCriteria(this.results);
    // TODO: send criteriaList to the web service.
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
    const items = <FormArray>this.productForm.get('items');
    items.push(this.createItem());
  }

  /**
   * Map the data from the form into the collection for
   * submission to the web service.
   * @param formData the data from the form collection.
   */
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

}
