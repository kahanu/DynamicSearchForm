import { LabelItem } from './models';

/**
 * The data populates the first drop down that has the fields that will be searched.
 * Example: Phone, FirstName, Date, etc.
 */
export const labelArrayData: LabelItem[] = [
  { value: 'Phone', text: 'Phone', inputType: 'text', dataType: 'String' },
  {
    value: 'FirstName',
    text: 'First Name',
    inputType: 'text',
    dataType: 'String'
  },
  {
    value: 'LastName',
    text: 'Last Name',
    inputType: 'text',
    dataType: 'String'
  },
  {
    value: 'ContributionAmount',
    text: 'Contribution Amount',
    inputType: 'number',
    dataType: 'Decimal'
  },
  {
    value: 'StartDate',
    text: 'Start Date',
    inputType: 'date',
    dataType: 'DateTime'
  }
];

/**
 * The TypeGroup maps the selected input type ('text', 'date', 'number', etc)
 * with the supported operation types for the drop down since different types
 * require different operations.
 */
export const typeGroup: any[] = [
  { type: 'default', supportedTypes: ['EqualTo', 'NotEqualTo'] },
  {
    type: 'text',
    supportedTypes: [
      'Contains',
      'EndsWith',
      'EqualTo',
      'IsEmpty',
      'IsNotEmpty',
      'IsNotNull',
      'IsNotNullNorWhiteSpace',
      'IsNull',
      'IsNullOrWhiteSpace',
      'NotEqualTo',
      'StartsWith'
    ]
  },
  {
    type: 'number',
    supportedTypes: [
      'Between',
      'EqualTo',
      'GreaterThan',
      'GreaterThanOrEqualTo',
      'LessThan',
      'LessThanOrEqualTo',
      'NotEqualTo'
    ]
  },
  { type: 'boolean', supportedTypes: ['EqualTo', 'NotEqualTo'] },
  {
    type: 'date',
    supportedTypes: [
      'Between',
      'EqualTo',
      'GreaterThan',
      'GreaterThanOrEqualTo',
      'LessThan',
      'LessThanOrEqualTo',
      'NotEqualTo'
    ]
  },
  { type: 'nullable', supportedTypes: ['IsNotNull', 'IsNull'] }
];
