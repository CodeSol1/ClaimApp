import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {


  constructor(private authsrvice: AuthService) { }

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
    console.warn(this.SignupForm.value)
    this.authsrvice.registeruser(this.SignupForm.value).subscribe(res =>
      console.log(res)
    )
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

