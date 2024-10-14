import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private _router:Router,private _auth:AuthService){}
      loginForm:FormGroup = new FormGroup({
          username :new FormControl(''),
          password :new FormControl(''),
      })
      login(){
          const {username,password}=this.loginForm.value;
          // if(username === 'admin' && password === 'admin'){
          //     this._router.navigate(['/dashboard'])
          // }else{
          //     alert("Wrong")
          // }
          this._auth.login(username,password).subscribe({
            next : ()=> this._router.navigate(['/dashboard']),
            error: err => {console.log('err')}
})


      }

}

