import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorageService {

  constructor() { }

  setToken(token: string){
    localStorage.setItem('Token',token);
  }

  getToken(){
    return localStorage.getItem('Token');
  }

  clearStorage(){
    localStorage.removeItem('Token');
  }

   chekToken(){

    if (this.getToken() == null ) {
      return false
    } else {
      return true
    }
  }
}
