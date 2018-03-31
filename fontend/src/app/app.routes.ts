import { Routes} from "@angular/router";
import {HomepageComponent} from "./home/homepage/homepage.component";


export const signIn = 'app/auth/auth.module#AuthModule';


export const appROUTER: Routes = [
  {
    path: '' , component: HomepageComponent
  },
  {
    path: 'sign-in', loadChildren: signIn
  },
  {
    path: '**' , component: HomepageComponent
  }
];


