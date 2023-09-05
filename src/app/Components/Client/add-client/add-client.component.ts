import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  addClientForm!: UntypedFormGroup;
  addressForm!: UntypedFormGroup;
  parishes = [
    { Name: 'Hanover' },
    { Name: 'Saint Elizabeth' },
    { Name: 'Trelawny' },
    { Name: 'Westmoreland' },
    { Name: 'Clarendon' },
    { Name: 'Manchester' },
    { Name: 'Saint Ann' },
    { Name: 'Saint Catherine' },
    { Name: 'Saint Mary' },
    { Name: 'Kingston' },
    { Name: 'Portland' },
    { Name: 'Saint Andrew' },
    { Name: 'Saint Thomas' },
  ];
  constructor(private formBuilder: UntypedFormBuilder) {
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
}
