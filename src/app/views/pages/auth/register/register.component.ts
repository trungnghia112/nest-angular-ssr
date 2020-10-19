import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '@core/configs/constants';
import { ErrorResponse } from '@core/interfaces/response';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@shared/validator/custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean;

  form: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  agree: AbstractControl;

  errorMessage: string;

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters.',
      maxlength: 'Name can\'t be longer than 200 characters.'
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email address.'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters.'
    },
    confirmPassword: {
      required: 'Confirm Password is required.',
      noPasswordMatch: 'Confirm Password does not match.',
      minlength: 'Confirm Password must be at least 6 characters.'
    }
  };

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.form = this.fb.group({
        name: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200)
        ])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        agree: [true],
        password: [null, Validators.compose([
          // 1. Password Field is Required
          Validators.required,
          // 2. check whether the entered password has a number // Must contain at least 1 number!
          // CustomValidators.patternValidator(/\d/, {hasNumber: true}),
          // 3. check whether the entered password has upper case letter // Must contain at least 1 in Capital Case!
          // CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
          // 4. check whether the entered password has a lower-case letter // Must contain at least 1 Letter in Small Case!
          // CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
          // 5. check whether the entered password has a special character // Must contain at least 1 Special Character!
          // CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {hasSpecialCharacters: true}),
          // 6. Has a minimum length of 6 characters // Must be at least 6 characters!
          Validators.minLength(6)
        ])],
        confirmPassword: [null, Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      });
    this.name = this.form.controls.name;
    this.email = this.form.controls.email;
    this.password = this.form.controls.password;
    this.confirmPassword = this.form.controls.confirmPassword;
    this.agree = this.form.controls.agree;
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

    const { email, password, name } = this.form.value;


    try {
      await this.auth.emailSignUp(email, password, name);
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
