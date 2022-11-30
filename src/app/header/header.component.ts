import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.http.removeBearerToken();
    this._router.navigate(['/login']);
  }
}
