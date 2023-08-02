import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  addToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(): string {
    return localStorage.getItem('token');
  }

}
