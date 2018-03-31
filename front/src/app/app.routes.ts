import { Routes} from "@angular/router";
import {HomepageComponent} from "./home/homepage/homepage.component";


export const signIn = 'app/auth/auth.module#AuthModule';


export const appROUTER: Routes = [
  {
    path: '',   redirectTo: '/sign-in', pathMatch: 'full'
  },
  {
    path: 'home', component:HomepageComponent
  },
  {
    path: 'sign-in', loadChildren: signIn
  },
  {
    path: '**' , component: HomepageComponent
  }
];


