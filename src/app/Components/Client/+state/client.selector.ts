import { Selector } from "@ngxs/store";
import { ClientStateModel } from "./client.state";
import { Observable } from "rxjs";


export class ClientSelector{
    @Selector()
    static getClients(state: ClientStateModel) {
      return state.client;
    }

    //@Selector(ClientSelector.getClients) clientsList$: Observable<CLIENT>;
}