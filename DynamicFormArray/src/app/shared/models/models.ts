

/**
 * This is the base class for all Primary Key'd entities.
 */
export class Entity {
  Id: any;
}

export class ResponseBase {
  Success: boolean;
  FailureInformation: string;
  Data: {} | any[];
}

export class Customer {
  CustomerId: number;
  CustomerName: string;
  PhoneNumber: string;
  DeliveryAddressLine1: string;
  DeliveryAddressLine2: string;
  DeliveryPostalCode: string;
  PostalAddressLine1: string;
  PostalAddressLine2: string;
}
