import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {TokenStorageService} from "../../token-storage.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;



  formSubmit(){
    this.authService.auth(this.form.value).subscribe(data => {

      this.tokenService.setToken(data.token);
      this.router.navigate(['/home']);

    }, (response: HttpErrorResponse) => {  this.setErrors( response.error)   });
  }

  private setErrors(errors: SignInErrors){
    Object.keys(errors).forEach(attribute =>{
      this.form.get(attribute).setErrors(errors[attribute])
    })
  }

  constructor(
    private formBuilder:  FormBuilder,
    private authService:  AuthService,
    private tokenService: TokenStorageService,
    private router:       Router

  ) { }

 chekToken(){

    if (this.tokenService.getToken() == null ) {
      this.router.navigate(['/sign-in'])
    } else {

      this.router.navigate(['/home'])
    }
  }



  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        'username': [''],
        'password': [''],
        'non_field_errors': [''],
      }

    );
    this.chekToken();
  }

}

export interface SignInErrors {
  username?: string[];
  password?: string[];
}
