import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { User } from 'src/app/models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  
  repeatpass: string = 'none';

  isaccountcreated: boolean = false;
  displayMsg: string = "";

  constructor(private authsrvice: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  // reactive form settings
  SignupForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),

    Password: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ]),
    RePassword: new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)
    ]),
  })



  SignUpUser(SignupForm: any) {
    let user = new User();
    user.Email = SignupForm.controls.Email.value;
    user.Password = SignupForm.controls.Password.value;
    user.RePassword = SignupForm.controls.RePassword.value;

    if (user.Password == user.RePassword) {
      // console.log("submitted")
      console.log(user)
      this.authsrvice.registeruser(user).subscribe((res) => {
        console.log(res)

        this.displayMsg = "Account created Successfully!";
        this.isaccountcreated = true;
        // this.router.navigateByUrl("login")
      },
        error => {
          console.log(error);
          console.log(error.status);
          if (error.status == 400) {
            this.displayMsg = "Account already exist!";
            this.isaccountcreated = false;

          }}
)

    }
    else {
      this.repeatpass = 'inline';
    }

  }







  // for handling validation

  get useremail(): FormControl {
    return this.SignupForm.get('Email') as FormControl;
  }

  get userpass(): FormControl {
    return this.SignupForm.get('Password') as FormControl;
  }
  get reuserpass(): FormControl {
    return this.SignupForm.get('RePassword') as FormControl;
  }


}



