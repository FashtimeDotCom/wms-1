import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  constructor(private api: ApiService) { }

  auth(authData: AuthData): Observable<AuthResponse> {
    return this.api.post('api/token-auth/',authData );
  }
}

export interface AuthData {
  username:string,
  password:string
}

export interface Response<T>{
  data: T
}

export interface AuthResponse {
  token: string
}
