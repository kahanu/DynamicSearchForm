import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() supportedTypes: any[] = [];

  constructor() { }

  ngOnInit() { }
}
