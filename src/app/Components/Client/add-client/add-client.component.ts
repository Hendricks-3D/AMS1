import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddClient } from '../+state/client.actions';
import { Client } from 'src/Models/classes/clients';
import { ClientModel } from 'src/Models/Interface/client-model';
import { generateGuid } from 'src/app/functions/guid.functions';
import { Parishes } from 'src/app/enumerations/parishes.enum';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  addClientForm!: UntypedFormGroup;
  addressForm!: UntypedFormGroup;
  PARISHES = Parishes;
  constructor(private formBuilder: UntypedFormBuilder, private store: Store) {
    this.buildAddClientForm();
    this.buildAddressForm();
  }

  ngOnInit(): void {}
  buildAddClientForm() {
    this.addClientForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      MiddleName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: ['', Validators.required],
      Email: ['', Validators.required],
      MobileNumber: ['', Validators.required],
    });
  }

  buildAddressForm(): void {
    this.addressForm = this.formBuilder.group({
      Country: ['', Validators.required],
      Street: ['', Validators.required],
      State: ['', Validators.required],
      ZipCode: ['', Validators.required],
      City: ['', Validators.required],
    });
  }

  get clientControls() {
    return this.addClientForm.controls;
  }
  private buildClient(): ClientModel {
    const client: ClientModel = {
      id: generateGuid(),
      ReferenceName: '',
      ReferenceMobile: '',
      FirstName: this.clientControls['FirstName'].value,
      MiddleName: this.clientControls['MiddleName'].value,
      LastName: this.clientControls['LastName'].value,
      Gender: this.clientControls['Gender'].value,
      Email: this.clientControls['Email'].value,
      MobileNumber: this.clientControls['MobileNumber'].value,
    };

    return client as unknown as ClientModel;
  }
  private addClient() {
    this.store.dispatch(new AddClient(this.buildClient()));
  }

  public onSubmit(): void {
    if (this.addClientForm.valid) {
      this.addClient();
    }
  }
}
