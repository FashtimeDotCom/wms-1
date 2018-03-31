import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../environments/environment";


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }


  get(url: string ): Observable<any>  {

    return this.http.get(url);

  }

  post(url: string,data: object): Observable<any>{
    return this.http.post(url,data);
  }

  delete(url: string): Observable<any>{
    return this.http.delete(url);
  }

  put(url: string,data: object): Observable<any>{
    return this.http.put(url,data);

  }

}
