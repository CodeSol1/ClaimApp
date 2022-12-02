import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/user';
import { PolicyService } from 'src/app/Service/policy.service';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css']
})
export class PolicydetailsComponent implements OnInit {

 
  policylist:Policy ={
    id: 0,
    policyName: '',
    insuranceTye: '',
    ageLimit: '',
    premiumAmount: 0,
    duration: 0,
    coverAmount: 0,
    
  };

  constructor(private route:ActivatedRoute,private policyservice:PolicyService,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
      const id=  params.get('id');

       if(id){
          this.policyservice.getPolicy(id).subscribe({
            next:(response) => {
                 this.policylist = response;
            }
          })
       }
      }
    })
  }

}
