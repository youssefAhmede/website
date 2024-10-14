import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _auth:AuthService,private _router:Router){}
logout(){
  this._auth.logOut();
  this._router.navigate(['/login']);
}
}
