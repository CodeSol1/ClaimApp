import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyHolder } from 'src/app/Models/PolicyHolder.model'; 
import { PolicyholdersService } from 'src/app/Service/policyholders.service';
import { FormControlDirective } from '@angular/forms';
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
  policy= new PolicyHolder();
  
    constructor(private route:ActivatedRoute,private policyholderservice:PolicyholdersService,private router:Router){}
    ngOnInit(): void {}
  
  
    addPolicyHolder(form:PolicyHolder)
    {
        this.policyholderservice.addPolicyHolder(this.addPolicyHolderRequest).subscribe({
  
          next:(form) =>{
            
          }
         })
  
    }

}
