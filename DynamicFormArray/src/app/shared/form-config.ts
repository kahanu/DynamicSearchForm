import { FormDataItem } from './models';

export const config: FormDataItem[] = [];

export const labelArrayData: any[] = [
  { value: 'Phone', text: 'Phone', dataType: 'text' },
  { value: 'FirstName', text: 'First Name', dataType: 'text' },
  { value: 'LastName', text: 'Last Name', dataType: 'text' },
  {
    value: 'ContributionAmount',
    text: 'Contribution Amount',
    dataType: 'number'
  },
  { value: 'StartDate', text: 'Start Date', dataType: 'date' }
];

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
