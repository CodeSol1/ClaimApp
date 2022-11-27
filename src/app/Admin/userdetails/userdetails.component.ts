import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users: any[] = [];
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.GetUser().subscribe(res => {
      this.users = res
    })
  }

}
