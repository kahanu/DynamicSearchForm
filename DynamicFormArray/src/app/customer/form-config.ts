import { ConfigItem } from '../shared/dynamic/models/models';

/**
 * The data populates the first drop down that has the fields that will be searched.
 * Example: Phone, FirstName, Date, etc.
 */
export const customerConfig: ConfigItem[] = [
  {
    value: 'Phone',
    text: 'Phone',
    inputType: 'text',
    dataType: 'String',
    placeHolder: 'Format: 8882229999'
  },
  {
    value: 'FirstName',
    text: 'First Name',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'LastName',
    text: 'Last Name',
    inputType: 'text',
    dataType: 'String',
    placeHolder: ''
  },
  {
    value: 'ContributionAmount',
    text: 'Contribution Amount',
    inputType: 'number',
    dataType: 'Decimal',
    placeHolder: '000.00'
  },
  {
    value: 'Date',
    text: 'Date',
    inputType: 'date',
    dataType: 'DateTime',
    placeHolder: ''
  }
];
