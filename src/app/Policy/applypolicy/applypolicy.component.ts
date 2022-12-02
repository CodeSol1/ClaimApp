import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyHolder } from 'src/app/Models/PolicyHolder.model'; 
import { PolicyholdersService } from 'src/app/Service/policyholders.service';
import { FormControlDirective } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-applypolicy',
  templateUrl: './applypolicy.component.html',
  styleUrls: ['./applypolicy.component.css']
})
export class ApplypolicyComponent implements OnInit {

  addPolicyHolderRequest:PolicyHolder={
 
    holderId: 0,
    userId: 0,
    applicantName: '',
    nominee: '',
    age: '',
    phoneNumber:''
     
  };
  
 
  // policy = new PolicyHolder();
  

  
  constructor(private route: ActivatedRoute, private policyholderservice: PolicyholdersService, private router: Router, private authService: AuthService) { }
  
  userId = this.authService.getuserid();
    ngOnInit(): void {}
  
  

    addPolicyHolder(form:PolicyHolder)
    {
      
      console.log(typeof this.userId);
      let id = Number(this.userId);
      this.addPolicyHolderRequest.userId = id;
      
        this.policyholderservice.addPolicyHolder(this.addPolicyHolderRequest).subscribe({
           
          next:(form) =>{
            alert("successfully applied");
            this.router.navigate([""]);
          }
         })
  
    }

}
