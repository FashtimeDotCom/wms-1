import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../token-storage.service";
import {Router} from "@angular/router";
import {ApiService} from "../../api.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private tokenService: TokenStorageService,
    private api: ApiService,
    private router: Router
  ) { }

  list(){
    this.listWarehouses().subscribe(data => {
      console.log(data);
    })
  }

  listWarehouses (): Observable<Warehouse>{
    return this.api.get('api/warehouses');
  }

  chekToken(){

    if (this.tokenService.getToken() == null ) {
      this.router.navigate(['/sign-in'])
    } else {

      this.router.navigate(['/home'])

    }
  }

  ngOnInit() {
    this.chekToken()
  }

}


export interface Warehouse{
  id: number;
  name:string;
}
