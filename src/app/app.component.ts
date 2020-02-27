import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../app/services/user.service'
import { UserModel } from './models/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ButtonAdmin;
  ButtonMakeAdmin;
  badgeContent: number;
  registerForm: FormGroup;
  submitted = false;

  constructor(public userService: UserService, private formBuilder: FormBuilder) {

    this.badgeContent = this.userService.Members();
  }
  title = 'New Team';
  user = new UserModel();
  users: UserModel[] = []
   
  ngOnInit() {
   
    this.users = this.userService.getAllUsers();
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pais: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }

  get fval() {
    return this.registerForm.controls;
  }
  signup() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid && this.submitted == true) {
      this.userService.addUser(this.registerForm.value);
      alert('El registro se ha completado con exito!');
      location.reload();
    }
  }
  removeUser() {
    this.userService.deleteUser(this.user.id);
    location.reload();
  }
  makeAdmin() {
  this.userService.MakeAdmin();
   location.reload();
  }

}



