import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClaimService } from 'src/app/Service/claim.service';

@Component({
  selector: 'app-userclaims',
  templateUrl: './userclaims.component.html',
  styleUrls: ['./userclaims.component.css']
})
export class UserclaimsComponent implements OnInit {
  claims: any[] = [];
  statusform!: FormGroup;
  
  constructor(private _claim: ClaimService, private formbuilder: FormBuilder) { }



  ngOnInit(): void {
    this.statusform = this.formbuilder.group({
      status: [''],
      claimid:[''],

    })
    this._claim.Getcliam().subscribe(res => {
      this.claims = res
      console.log(this.claims)
    })
  }
  
  status() {
    let id = this.statusform.value.claimid;
    for (let item of this.claims) {
      item.status = this.statusform.value.status;
     
      if (id == item.claimId) {
        this._claim.updatestatus(id, item).subscribe(res => {
          console.log(item)
          alert('status updated')
          
        })
        break;
      }
     
    }
   
  }

}
