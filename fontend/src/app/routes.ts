import {Routes} from "@angular/router";
import {HomepageComponent} from "./home/homepage/homepage.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";

export const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'auth/sign-in', component: SignInComponent}
];
