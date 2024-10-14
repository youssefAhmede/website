import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) {//Dr Ahmed

  }
  apiURL='https://dummyjson.com/products';//Dr Ahmed
  getProducts():Observable<any>{            //Dr Ahmed
    return this._http.get<any>(this.apiURL);//Dr Ahmed
  }
}
