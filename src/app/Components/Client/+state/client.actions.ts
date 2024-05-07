import { ClientModel } from 'src/Models/Interface/client-model';

export class AddClient {
  public static readonly type = '[Client] add client';
  constructor(public client: ClientModel) {}
}

export class RemoveClient {
  public static readonly type = '[Client] remove client';
  constructor(public client: ClientModel) {}
}
