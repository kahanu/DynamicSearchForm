
export enum ExpressionOperation {
  EqualTo,
  Contains,
  DoesNotContain,
  StartsWith,
  EndsWith,
  NotEqualTo,
  GreaterThan,
  GreaterThanOrEqualTo,
  LessThan,
  LessThanOrEqualTo,
  Between,
  IsNull,
  IsEmpty,
  IsNullOrWhiteSpace,
  IsNotNull,
  IsNotEmpty,
  IsNotNullNorWhiteSpace,
  In
}

export class SearchCriteria {
  FieldName: string;
  OperationName: ExpressionOperation;
  FieldValue: any[];
  Type: string;
  Connector: any;
}

export class LabelItem {
  value: any;
  text: any;
  dataType: any;
  inputType: any;
}


// export class FormDataItem {
//   FieldName: string;
//   InputName: string;
//   InputType: string;
// }

// export class LabelItem {
//   labelName: string;
//   fieldValue: string;
//   operation: string;
//   dataType: string;
//   inputType: string;
//   connector: string;
// }
