import { Component, OnInit } from '@angular/core';

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
 
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),

    Password: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ])

  })

  isuservalid: boolean = false;
  LoginSubmitted(LoginForm: any) {
    // console.log(this.LoginForm)
  
    let obj: object;
    
    let loginuser= new Login();
    loginuser.Email = LoginForm.controls.Email.value;
    loginuser.Password = LoginForm.controls.Password.value;

    // this.authService.loginUser(this.LoginForm.value).subscribe(res => {
    //   obj = res;

    //   console.log(res);

    this.authService.loginUser(loginuser)
        .pipe(map(response => ({
          Email: response[],
          Role: response,
        
        })))
        .subscribe(luke => console.log(luke))




        // this.isuservalid = true;
        // alert("Login Successful")
        // this.router.navigateByUrl("")

    // },
    //   error => {
    //     console.log(error);
    //     if (error.status == 400) {
         
    //       alert("SOme error occured!")
    //     }
    //     else if (error.status == 404)
    //     {
         
    //       alert("Email Or Password Invalid!")
    //     }
    //   }
    
    // );


  }




  get useremail(): FormControl {
    return this.LoginForm.get('Email') as FormControl;
  }

  get userpass(): FormControl {
    return this.LoginForm.get('Password') as FormControl;
  }

}


