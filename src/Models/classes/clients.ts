import { Clone } from 'src/app/functions/clone.functions';
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

  constructor(dispatchPreference?: Partial<Client>) {
    if (dispatchPreference) {
      Object.assign(this, Clone(this, dispatchPreference));
    }
  }
}
