import {
  Action,
  Selector,
  State,
  StateContext,
  StateToken,
  Store,
} from '@ngxs/store';
import { ClientModel } from '../../../../Models/Interface/client-model';
import { Injectable } from '@angular/core';
import { AddClient, RemoveClient } from './client.actions';

export interface ClientStateModel {
  client: ClientModel | null;
}

export const CLIENT_STATE_TOKEN = new StateToken<ClientStateModel>('client');

const CLIENT_STATE_VALUE: ClientStateModel = {
  client: null,
};

@Injectable({
  providedIn: 'root',
})

@State<ClientStateModel>({
  name: CLIENT_STATE_TOKEN,
  defaults: CLIENT_STATE_VALUE,
})

export class ClientState {
  constructor() {}


  @Action(AddClient)
  add(
    { getState, patchState }: StateContext<ClientStateModel>,
    { client }: AddClient
  ) {
    const state = getState();

    patchState({
      client: client,
    });
  }

  @Action(RemoveClient)
  remove(
    { getState, patchState }: StateContext<ClientStateModel>,
    { client }: AddClient
  ) {
    const state = getState();

    patchState({
      client: (getState().client = null),
    });
  }
}
