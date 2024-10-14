import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiURL = 'https://dummyjson.com/auth/login'
private tokenSubject :BehaviorSubject<string | null> = new
BehaviorSubject<string | null>(null);
  constructor(private _http:HttpClient) {
    const token=localStorage.getItem('accesstoken')
    if(token){
      this.tokenSubject.next(token);
    }
  }
  login(username:string,password:string): Observable<any>{
      return this._http.post<any>(this.apiURL,{username:username,password:password}).pipe(
        tap(res=>{
          const token=res;
          localStorage.setItem('accesstoken',token)
          this.tokenSubject.next(token.accessToken)
          console.log(token);
        }
        )
      )
  }
  getToken():Observable<string | null>{
    return this.tokenSubject.asObservable();
  }
  logOut(){
    localStorage.removeItem('acesstoken');
    this.tokenSubject.next(null);
  }
  isAuthanticated():boolean{
    return this.tokenSubject.value !== null;
  }
}
