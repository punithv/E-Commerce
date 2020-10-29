import { Injectable } from '@angular/core';
import {Product } from 'src/app/modal/product'
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  Items:Product[]=[];

  constructor() { }

  update(items){
    this.Items=items;
    console.log(this.Items)
     
}
getUpdate(){
  console.log("itemsssss",this.Items)
  return this.Items;
}
}
