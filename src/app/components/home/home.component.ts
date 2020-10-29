import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/modal/product'
import {DataserviceService} from 'src/app/services/dataservice.service';
import { Store, select, State } from '@ngrx/store';
import  * as AddToCart  from 'src/app/components/state/items.action';
import { state } from '@angular/animations';
// import { AppState } from '../status/app.state';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  inCart=false;
  // Data:Observable<Product[]>;
  product: Product[]=[];
  Data:Product[];
  @Input() data: Product;
  

  constructor(public http:HttpService,public dataservice:DataserviceService,private store: Store<any>) {
    store.pipe(select('product')).subscribe(state => (this.Data = state.product));
     
  }
  ngOnInit() {
    this.store.dispatch(new AddToCart.GetItems());
  }

  addtoCart(data){
    console.log(data)
    this.store.dispatch(new AddToCart.AddToCart(data))
    this.inCart=true;  
  }




}
