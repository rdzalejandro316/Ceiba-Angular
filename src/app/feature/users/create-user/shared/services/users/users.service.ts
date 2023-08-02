import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(public http:HttpClient){}
    
  getUsers() {
    return this.http.get<any>(`${environment.API}/users`).toPromise();
  }

  createUser(user:any) {
    return this.http.post<any>(`${environment.API}/users`,user).toPromise();
  }

  deleteUserForIndex(index: number) 
  {
    return this.http.delete<any>(`${environment.API}/users/${index}`).toPromise();
  }
}
