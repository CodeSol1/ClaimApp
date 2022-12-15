import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/Service/policy.service';
import { PolicyholdersService } from 'src/app/Service/policyholders.service';

@Component({
  selector: 'app-policyholders',
  templateUrl: './policyholders.component.html',
  styleUrls: ['./policyholders.component.css']
})
export class PolicyholdersComponent implements OnInit {
  policyholder: any[] = [];
  constructor(private policyservice: PolicyholdersService) { }

  ngOnInit(): void {
    this.policyservice.getpolicyholder().subscribe(res => {
      this.policyholder = res;
    })
  }


}
