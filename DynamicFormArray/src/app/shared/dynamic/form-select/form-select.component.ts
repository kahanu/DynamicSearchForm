import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { typeGroup } from '../../form-config';
import { PubSubService } from '../../../core/pub-sub.service';
import { SelectState } from '../../pubsub/models';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit, OnChanges {
  @Input() form: FormGroup;
  // @Input() type: string;
  @Input() controlName: string;

  @Input() supportedTypes: any[] = [];

  constructor(private pubSub: PubSubService) {
    // this.pubSub.getSelect().subscribe((res: SelectState) => {
    //   console.log('pub sub ctor res: ', res);
    //   if (res) {
    //     this.getSelectedOperations(res);
    //   }
    // });
  }

  ngOnInit() {
    // console.log('type: ', this.type);
    // this.getSelectedOperations(this.type);
    // this.pubSub.getSelect().subscribe((res: SelectState) => {
    //   console.log('pub sub init res: ', res);
    //   if (res) {
    //     this.getSelectedOperations(res);
    //   }
    // });
  }

  ngOnChanges() {
    // console.log('changed type: ', this.type);
    // this.getSelectedOperations(this.type);
    // this.pubSub.getSelect().subscribe((res: SelectState) => {
    //   console.log('pub sub changes res: ', res);
    //   if (res) {
    //     this.getSelectedOperations(res);
    //   }
    // });
  }

  getSelectedOperations(type: any) {
    const typegroup = typeGroup.find(item => item.type === type);
    this.loadSupportedTypes(typegroup);
  }

  loadSupportedTypes(typegroup: any) {
    this.supportedTypes = Object.assign([], typegroup.supportedTypes);
    console.log(this.supportedTypes);
  }
}
