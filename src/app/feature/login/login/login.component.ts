import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { LoginService } from '../shared/services/login/login.service';
import { StorageService } from '@shared/service/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailValidate: boolean = false;
  passwordValidate: boolean = false;
  passwordMin: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly storageService: StorageService
  ) { }

  ngOnInit(): void {

    var token = this.storageService.getToken();
    if (token != null) this.redirectUsers();

    this.initForms();
    this.validateFormStatus();
  }

  initForms() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  validateFormStatus() {
    this.loginForm.valueChanges.subscribe(value => {

      let ctrlEmail = this.loginForm.controls.email;
      if (ctrlEmail.dirty || ctrlEmail.touched) {
        let errorEmailRequired = ctrlEmail.errors?.['required'];
        this.emailValidate = errorEmailRequired == undefined ? false : true;
      }

      let ctrlPassword = this.loginForm.controls.password;
      if (ctrlPassword.dirty || ctrlPassword.touched) {
        let errorPasswordRequired = ctrlPassword.errors?.['required'];
        this.passwordValidate = errorPasswordRequired == undefined ? false : true;

        let errorPasswordMinlength = ctrlPassword.errors?.['minlength'];
        this.passwordMin = errorPasswordMinlength == undefined ? false : true;
      }
    });
  }

  login() {

    var data: User = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }

    this.loginService.login(data).
      then(
        (response) => {
          this.storageService.addToken(response.token);
          this.redirectUsers();
        },
        () => {
          alert("user no found");
        }
      );
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
