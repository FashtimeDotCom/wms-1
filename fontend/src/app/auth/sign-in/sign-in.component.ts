import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  authForm = new FormGroup ({
    username: new FormControl(),
    password: new FormControl(),

  })

  constructor() { }

  ngOnInit() {
  }

}
