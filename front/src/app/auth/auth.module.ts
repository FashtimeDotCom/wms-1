import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {RouterModule,Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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

  declarations: [
    SignInComponent,
  ]
})
export class AuthModule { }
