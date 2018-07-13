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

  createItem(): FormGroup {
    return this.fb.group({
      name: 'John',
      description: 'Something...',
      price: 8.95
    });
  }

  initForm() {
    this.customerForm = this.fb.group({
      items: this.fb.array([
        this.createItem()
      ])
    });
  }

}
