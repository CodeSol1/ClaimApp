import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  repeatpass: string = 'none';

  isaccountcreated: boolean = false;
  displayMsg: string = "";

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
    if (this.userpass.value == this.reuserpass.value)
    {
      console.log("submitted")

    
     this.authsrvice.registeruser(this.SignupForm.value).subscribe((res) => {
       console.log(res)
       
       if (res == "Submit")
       {
         this.displayMsg = "Account created Successfully!";
         this.isaccountcreated = true;
       }
       else if (res = 'AlreadyExist')
       {
         this.displayMsg = "Account already exist!";
         this.isaccountcreated = false;
       }
       
       else { 
         this.displayMsg = "something went wrong";
         this.isaccountcreated = false;
       }
       

     })
      
      
      
      
    } else {
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



