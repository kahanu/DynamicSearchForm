
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

export class ConfigItem {
  value: any;
  text: any;
  dataType: any;
  inputType: any;
  placeHolder: string;
}
