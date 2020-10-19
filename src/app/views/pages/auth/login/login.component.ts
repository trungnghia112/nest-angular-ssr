import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorResponse } from '@core/interfaces/response';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { Constants } from '@core/configs/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean;

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  remember: AbstractControl;

  errorMessage: string;

  validationMessages = {
    email: {
      required: 'Email is required.',
      email: 'Invalid email address.'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters.'
    }
  };

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      remember: [false]
    });
    this.email = this.form.controls.email;
    this.password = this.form.controls.password;
    this.remember = this.form.controls.remember;
  }

  ngOnInit() {
    // if (this.auth.currentUser) {
    //   return this.router.navigate(['/']);
    // }
  }

  async onGoogleLogin() {
    await this.auth.googleLogin();
    await this.afterSignIn();
  }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;


    try {
      await this.auth.emailLogin(email, password);
      // console.log(result);
    } catch (error) {
      const message: ErrorResponse = error;
      if (message.error.meta.messages) {
        this.errorMessage = message.error.meta.messages;
      }
    }

    await this.afterSignIn();

  }

  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    // const redirectUrl = this.auth.redirectUrl;
    // this.auth.redirectUrl = Constants.redirectUrl;
    return this.router.navigate([Constants.redirectUrl]);
  }
}
