import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Interface/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
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
      const user = this.buildUser();
      this.userService.loginUser(user).subscribe((response) => {
        if (response.data) {
          //login user and redirect to Dashboad
          this.router.navigateByUrl('sidebar');
          console.log(response.data.user);
        } else {
          //Display modal warning message
        }
      });
    }
  }

  togglePassword() {}
}
