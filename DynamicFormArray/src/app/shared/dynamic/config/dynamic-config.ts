
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
