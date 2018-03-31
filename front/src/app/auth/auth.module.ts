///<reference path="auth.service.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {RouterModule,Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {AuthService} from "./auth.service";
import {AuthInterceptor} from "./auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";



const ROUTER: Routes = [
  {
    path: '', component: SignInComponent
  },
  {
    path: '**', component: SignInComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTER),
    ReactiveFormsModule,

    MatToolbarModule,

    MatButtonModule,
    MatIconModule,

    MatInputModule,
    MatCardModule,


  ],
  exports: [
    RouterModule
  ],
  providers: [ AuthService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  declarations: [
    SignInComponent,

  ]

})
export class AuthModule { }
