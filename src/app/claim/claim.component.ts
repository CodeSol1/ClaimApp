import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Claim } from '../models/user';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private authsrvice: AuthService) { }


  ngOnInit(): void {
  }

  // reactive form setting

  ClaimForm = new FormGroup({
    Amount: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(500000)]),

    Hospital: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(500)]),


  })



  ClaimSubmitted(ClaimForm: any) {

    console.log(this.ClaimForm.value)

    let claim = new Claim();

    claim.Amount = ClaimForm.controls.Amount.value;
    claim.Hospital = ClaimForm.controls.Hospital.value;
    claim.Description = ClaimForm.controls.Description.value;
    
    
    this.authsrvice.CreateClaim(claim).subscribe(res => {
      console.log(res)
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
