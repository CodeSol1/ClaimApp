import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/Service/policy.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  policylist: any[] = [];
  constructor(private _pservice: PolicyService) { }

  ngOnInit(): void {

    this._pservice.getAllPolicies().subscribe({
      next: (policylist) => {
        this.policylist = policylist;
      },
      error: (response) => {
        console.log(response);
      }

    })
  }

}
