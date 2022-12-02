import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Login } from 'src/app/models/user';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),

    Password: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ])

  })
  loggeduser: string = ''
  isuservalid: boolean = false;
  LoginSubmitted(LoginForm: any) {

    let user = new Login();
    user.Email = LoginForm.controls.Email.value;
    user.Password = LoginForm.controls.Password.value;

    this.authService.loginUser(user)
      .subscribe(obj => {
        console.log(obj)
        console.log(Object.values(obj)[0]);

        localStorage.setItem("role", Object.values(obj)[0]);
        localStorage.setItem("email", Object.values(obj)[1]);
        localStorage.setItem("userid", Object.values(obj)[2]);


        this.authService.setBearcerToken(Object.values(obj)[3]);
        // this.authService.checkRole(Object.values(obj)[0]);
        if (Object.values(obj)[0] == 2)
          this.router.navigate(["admindashboard"]);
        if (Object.values(obj)[0] == 1)
          this.router.navigate([""]);


      },
        error => {
          console.log(error);
          if (error.status == 400) {

            alert("SOme error occured!")
          }
          else if (error.status == 404) {

            alert("Email Or Password Invalid!")
          }
        })









  }




  get useremail(): FormControl {
    return this.LoginForm.get('Email') as FormControl;
  }

  get userpass(): FormControl {
    return this.LoginForm.get('Password') as FormControl;
  }

}


