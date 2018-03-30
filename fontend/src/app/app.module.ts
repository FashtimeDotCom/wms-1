import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule} from "@angular/material";
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './home/homepage/homepage.component';
import { appRoutes} from "./routes";
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
