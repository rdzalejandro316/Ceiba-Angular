import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/services/users/users.service';
import { UserCreate } from '../model/user-create';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;
  nameValidate: boolean = true;
  jobValidate: boolean = true;

  constructor
    (
      private readonly router: Router,
      private readonly formBuilder: FormBuilder,
      private readonly usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.initForms();
    this.validateFormStatus();
  }

  initForms() {
    this.createUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]]
    });
  }

  validateFormStatus() {
    this.createUserForm.valueChanges.subscribe(value => {

      let ctrlName = this.createUserForm.controls.name;
      if (ctrlName.dirty || ctrlName.touched) {
        let errorNameRequired = ctrlName.errors?.['required'];
        this.nameValidate = errorNameRequired == undefined ? false : true;
      }

      let ctrlJob = this.createUserForm.controls.job;
      if (ctrlJob.dirty || ctrlJob.touched) {
        let errorJobRequired = ctrlJob.errors?.['required'];
        this.jobValidate = errorJobRequired == undefined ? false : true;
      }

    });
  }


  createUser() {
    var data: UserCreate = {
      name: this.createUserForm.controls.name.value,
      job: this.createUserForm.controls.job.value
    }

    this.usersService.createUser(data).then(
      () => {
        alert(`se creo el usuario ${data.name}`);
        this.redirectToListUsers();
      },
      () => {
        alert("error en la creacion de usuario");
      }
    );
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
