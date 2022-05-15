import { Address } from './address';

export class Client {
  id = '';
  FirstName = '';
  LastName = '';
  MiddleName = '';
  Gender = 'male' || 'female';
  Email = '';
  MobileNumber = '';
  Address = new Address();
  ReferenceName = '';
  ReferenceMobile = '';
}
