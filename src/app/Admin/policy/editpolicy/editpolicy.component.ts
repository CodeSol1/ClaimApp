import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from 'src/app/models/user';
import { PolicyService } from 'src/app/Service/policy.service';


@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {

  
policydetails:Policy={
  id:0,
  policyName:'',
  insuranceTye:'',
  ageLimit:'',
  premiumAmount:0,
  duration:0,
  coverAmount:0,
  
};
  constructor(private route:ActivatedRoute,private policyservice:PolicyService,private router:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
      const id=  params.get('id');

       if(id){
          this.policyservice.getPolicy(id).subscribe({
            next:(response) => {
              this.policydetails = response;
            
            }
          })
       }
      }
    })
  }

  updatePolicy(){
    this.policyservice.updatePolicy(this.policydetails.id,this.policydetails).subscribe({
      next: () => {
        alert("policy edited successfully");
           this.router.navigate(['admindashboard']);
      }
    })

  }

  deletePolicy(id:number){
    this.policyservice.deletePolicy(id).subscribe({
      next: (response) => {
        alert("policy deleted successfully");
        this.router.navigate(['admindashboard']);
      }
    })
  }

}
