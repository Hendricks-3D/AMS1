import { Address } from '../classes/address';

export interface ClientModel {
  id: string;
  FirstName: string;
  LastName: string;
  MiddleName: string;
  Gender: string;
  Email: string;
  MobileNumber: number;
  Address?: Address;
  ReferenceName: string;
  ReferenceMobile: string;
}
