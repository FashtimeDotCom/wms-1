import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from "@angular/material";


import { HomepageComponent } from './home/homepage/homepage.component';


import {appROUTER} from "./app.routes";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";

import {TokenStorageService} from "./token-storage.service";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { WarehouseComponent } from './warehouse/warehouse.component';





@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,

    WarehouseComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appROUTER),



    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,


  ],
  providers: [ApiService,
    TokenStorageService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
