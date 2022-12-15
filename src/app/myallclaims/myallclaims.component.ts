import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ClaimService } from '../Service/claim.service';

@Component({
  selector: 'app-myallclaims',
  templateUrl: './myallclaims.component.html',
  styleUrls: ['./myallclaims.component.css']
})
export class MyallclaimsComponent implements OnInit {

  claims: any[] = [];
  constructor(private _cliam: ClaimService, private auth: AuthService) { }

  userid = this.auth.getuserid();
  ngOnInit(): void {
    let id = Number(this.userid);
    console.log(id)

    this._cliam.GetcliambyID(id).subscribe(res => {
      this.claims = res
      console.log(this.claims)
    })
  }
}
