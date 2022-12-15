import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyHolder } from 'src/app/Models/PolicyHolder.model';
import { PolicyholdersService } from 'src/app/Service/policyholders.service';
import { FormControlDirective } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { PolicyService } from 'src/app/Service/policy.service';
@Component({
  selector: 'app-applypolicy',
  templateUrl: './applypolicy.component.html',
  styleUrls: ['./applypolicy.component.css']
})
export class ApplypolicyComponent implements OnInit {

  addPolicyHolderRequest: PolicyHolder = {

    // holderId: 0,
    userId: 0,
    applicantName: '',
    nominee: '',
    age: '',
    phoneNumber: '',
    policyId: 0,
    policyName: ''
  };


  // policy = new PolicyHolder();



  constructor(private route: ActivatedRoute, private policyholderservice: PolicyholdersService, private router: Router, private authService: AuthService, private policy: PolicyService) { }

  // policyname = this.policy.getAllPolicies();
  policy2: any = [];
  policy3: any = [];
  userId = this.authService.getuserid();


  ngOnInit(): void {
    this.policy.getAllPolicies().subscribe(res => {
      this.policy2 = res;

      // console.log(this.policy2)
    }

    )
    this.policyholderservice.getpolicyholder().subscribe(res => {
      this.policy3 = res;

      console.log(this.policy3)

    })

  }


  addPolicyHolder(form: PolicyHolder) {

    for (let item of this.policy2) {
      this.addPolicyHolderRequest.policyId = item.id;
      this.addPolicyHolderRequest.policyName = item.policyName;

      console.log(this.addPolicyHolderRequest.policyName)
    }

    let holderid = 0;

    for (let item of this.policy3) {
      holderid = item.holderId
      // console.log(holderid)
    }

    let id = Number(this.userId);
    this.addPolicyHolderRequest.userId = id;
    //  this.addPolicyHolderRequest.holderId = holderid;



     console.log(this.addPolicyHolderRequest)
    this.policyholderservice.addPolicyHolder(this.addPolicyHolderRequest).subscribe(res => {

     
      alert("successfully applied");
      this.router.navigate(["/mypolicy"]);

    })

  }

}
