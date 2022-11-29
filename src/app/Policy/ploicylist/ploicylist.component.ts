import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { PolicyService } from 'src/app/Service/policy.service';

@Component({
  selector: 'app-ploicylist',
  templateUrl: './ploicylist.component.html',
  styleUrls: ['./ploicylist.component.css']
})
export class PloicylistComponent implements OnInit {
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
