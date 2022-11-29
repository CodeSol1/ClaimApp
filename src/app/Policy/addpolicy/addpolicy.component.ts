import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from 'src/app/models/user';
import { PolicyService } from 'src/app/Service/policy.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {

  addPolicyRequest: Policy = {
    id: 0,
    policyName: '',
    insuranceTye: '',
    ageLimit: '',
    premiumAmount: 0,
    duration: 0,
    coverAmount: 0

  };
  policy = new Policy();
  constructor(private _pservice: PolicyService, private router: Router) { }

  ngOnInit(): void {
  }
  
  addPolicy(form: Policy) {
    this._pservice.addPolicy(this.addPolicyRequest).subscribe({

      next: (form) => {
        this.router.navigate(['poli-list'])
      }
    })


  }

}
