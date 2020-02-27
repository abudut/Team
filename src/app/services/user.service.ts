import { Injectable } from '@angular/core';
import { UserModel } from '../models/Users'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: UserModel[] = [];
  Paises=[{name:"es.png"},{name:"uk.png"},{name:"usa.png"}];

  constructor() {
    if (localStorage.getItem('Users') != null) {
      this.Users = JSON.parse(localStorage.getItem('Users'));
    }
  }
  addUser(user: UserModel) {
    user.id = this.Users.length;
    user.Admin = false;
    user.MakeAdmin = true;
    this.Users.push(user);
    localStorage.setItem('Users', JSON.stringify(this.Users));
  }
   
  getAllUsers() {
    return [...this.Users].sort((a, b) => {
      return a.nombre.localeCompare(b.apellidos);
    });
  }
  deleteUser(id: number) {
    this.Users.splice(this.Users.findIndex(user => user.id === id), 1);
    localStorage.setItem('Users', JSON.stringify(this.Users));
  }

  MakeAdmin() {
    localStorage.setItem('Users', JSON.stringify(this.Users));
  }
  
  Members() {
    return this.Users.length;
  }
}
