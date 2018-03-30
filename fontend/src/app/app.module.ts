import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatIconModule,

    MatInputModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
