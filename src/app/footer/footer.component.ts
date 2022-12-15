import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private http: AuthService) { }
  role = this.http.getrole()
  Role = Number(this.role)
  ngOnInit(): void {
  }

}
