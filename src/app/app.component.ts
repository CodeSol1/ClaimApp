import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClaimApp';

  loginuser :string = '';
  constructor(private http: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  logout()
    {
    this.http.removeBearerToken();
    this._router.navigate(['/login']);
  }


}
