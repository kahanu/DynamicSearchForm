import { ConfigItem } from '../shared/dynamic/models/models';

/**
 * The data populates the first drop down that has the fields that will be searched.
 * Example: Phone, FirstName, Date, etc.
 */
export const customerConfig: ConfigItem[] = [
  {
    value: 'CustomerName',
    text: 'Customer Name',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'PhoneNumber',
    text: 'Phone Number',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'DeliveryAddressLine1',
    text: 'Delivery Address 1',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'DeliveryAddressLine2',
    text: 'Delivery Address 2',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'DeliveryPostalCode',
    text: 'Delivery Postal Code',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'PostalAddressLine1',
    text: 'Postal Address 1',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'PostalAddressLine2',
    text: 'Postal Address 2',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  }
];
