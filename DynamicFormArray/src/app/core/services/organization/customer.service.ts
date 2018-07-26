import { Injectable } from '@angular/core';
import { HttpBase } from '../../http-base';
import { Customer } from '../../../shared/models/models';
import { HttpClient } from '@angular/common/http';
import { ExceptionService } from '../common/exception.service';

@Injectable()
export class CustomerService extends HttpBase<Customer | any> {

  constructor(protected http: HttpClient,
  protected exceptionService: ExceptionService) {
    super(http, exceptionService);
   }

}
