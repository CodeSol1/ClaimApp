import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { PolicyService } from '../Service/policy.service';

import { PolicyholdersService } from '../Service/policyholders.service';

@Component({
  selector: 'app-mypolicy',
  templateUrl: './mypolicy.component.html',
  styleUrls: ['./mypolicy.component.css']
})
export class MypolicyComponent implements OnInit {
  holders: any = [];
  constructor(private policyservice: PolicyService, private auth: AuthService) { }
  userid = this.auth.getuserid();

  ngOnInit(): void {

    let id = Number(this.userid);
    console.log(id)
    this.policyservice.getuserpoliyc(id).subscribe(res => {
      this.holders = res
    })

  }

}
