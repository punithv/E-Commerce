import { Component, OnInit } from '@angular/core';
import {  HttpService} from 'src/app/services/http.service';
import { Product } from 'src/app/modal/product';
import {DataserviceService} from 'src/app/services/dataservice.service';
import { Store,select } from '@ngrx/store';
import { state } from '@angular/animations';
import  * as AddToCart  from 'src/app/components/state/items.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  cart: Product[] = [];
  
  constructor(public dataservice:DataserviceService,private store: Store<any>) {
    store.pipe(select('product')).subscribe(state => (this.cart= state.cart));
    
    
   }
  

  ngOnInit() {
 

  }
  removeCart(datas){
    this.store.dispatch(new AddToCart.RemoveFromCart(datas)) 
  }

}
