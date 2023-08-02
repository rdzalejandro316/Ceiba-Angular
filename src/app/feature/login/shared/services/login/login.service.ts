import { AbstractType, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@feature/login/model/user';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {


  constructor(public http:HttpClient){}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(user:User)
  {
    return this.http.post<any>(`${environment.API}/login`,user).toPromise();
  }
}
