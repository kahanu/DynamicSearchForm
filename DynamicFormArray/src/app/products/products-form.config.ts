import { LabelItem } from '../shared/dynamic/models/models';

/**
 * The data populates the first drop down that has the fields that will be searched.
 * Example: Phone, FirstName, Date, etc.
 */
export const labelArrayData: LabelItem[] = [
  {
    value: 'ProductName',
    text: 'Product Name',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'Category',
    text: 'Category',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'ProductSKU',
    text: 'ProductSKU',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'OrderTotal',
    text: 'Order Total',
    inputType: 'number',
    dataType: 'Decimal',
    placeHolder: '000.00'
  },
  {
    value: 'OrderDate',
    text: 'Order Date',
    inputType: 'date',
    dataType: 'DateTime',
    placeHolder: ''
  }
];
