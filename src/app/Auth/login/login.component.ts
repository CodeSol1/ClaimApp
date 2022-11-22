import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  

export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),

    Password: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ])
   
  })

  LoginUser() {
    console.log("login form")
  }
 
 
  constructor() { }

  ngOnInit(): void {
  }

  get useremail(): FormControl {
    return this.LoginForm.get('Email') as FormControl;
  }

  get userpass(): FormControl {
    return this.LoginForm.get('Password') as FormControl;
  }

}


