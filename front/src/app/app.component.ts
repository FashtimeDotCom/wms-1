import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public auth: boolean;
  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ){}

  exit(){
    this.tokenService.clearStorage();
    this.auth = false;
    this.router.navigate(['/sign-in']);
  }


  ngOnInit() {
    this.auth = this.tokenService.chekToken();
  }


}
