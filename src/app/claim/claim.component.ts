import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Claim } from '../models/user';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private authsrvice: AuthService, private _router: Router) { }


  ngOnInit(): void {
  }

  // reactive form setting

  ClaimForm = new FormGroup({
    Amount: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(500000)]),

    Hospital: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(500)]),


  })

  
  userId = this.authsrvice.getuserid();


  ClaimSubmitted(ClaimForm: any) {
let uid= Number(this.userId)
    console.log(this.ClaimForm.value)

    let claim = new Claim();

    claim.Amount = ClaimForm.controls.Amount.value;
    claim.Hospital = ClaimForm.controls.Hospital.value;
    claim.Description = ClaimForm.controls.Description.value;
    claim.UserId = uid;
    
    this.authsrvice.CreateClaim(claim).subscribe(res => {
      console.log(res)
      alert("policy cliamed")
      this._router.navigate([""]);


    },
      
      
      error => {
        console.log(error);
        console.log(error.status);
        if (error.status == 400) {

          alert("SOme error occured!")
        }

      }

    )
  }



  get amount(): FormControl {
    return this.ClaimForm.get('Amount') as FormControl;
  }

  get hospital(): FormControl {
    return this.ClaimForm.get('Hospital') as FormControl;
  }
  get discription(): FormControl {
    return this.ClaimForm.get('Description') as FormControl;
  }

}
