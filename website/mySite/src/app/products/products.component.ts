import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{//Dr Ahmed
  products:any[]=[]
  constructor(private _dataS:DataService){}
    ngOnInit():void{
      this._dataS.getProducts().subscribe(data=>{
        this.products = data.products;
      })
    }

}
