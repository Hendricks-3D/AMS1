import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildLoginForm();
  }

  ngOnInit(): void {}

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  buildUser(): User {
    const { Email, Password } = this.loginForm.controls;

    const user = {
      email: Email.value,
      password: Password.value,
    };

    return user;
  }

  onSubmit() {
    if (this.loginForm.valid) {
    }
  }
}
