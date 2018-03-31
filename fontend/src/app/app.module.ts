import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";


import { HomepageComponent } from './home/homepage/homepage.component';


import {appROUTER} from "./app.routes";
import {RouterModule} from "@angular/router";





@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(appROUTER),


    BrowserAnimationsModule,
    MatToolbarModule,

    MatButtonModule,
    MatIconModule,


    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
