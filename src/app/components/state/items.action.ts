import { Action } from '@ngrx/store';
import {Product} from 'src/app/modal/product';

export enum ActionTypes {
    Add = '[product] Add to cart',
    LoadItems = '[product] Load items from server',
    LoadSuccess = '[product] Load success',
    Remove = '[Product] Remove from cart'
  }
  export class AddToCart implements Action {
    readonly type = ActionTypes.Add;
    constructor(public payload: Product) {}
  }
  export class GetItems implements Action {
    readonly type = ActionTypes.LoadItems;
  }
  
  export class RemoveFromCart implements Action {
    readonly type = ActionTypes.Remove;
  
    constructor(public payload:Product) {}
  }
  
  export class LoadItems implements Action {
    readonly type = ActionTypes.LoadSuccess;

    constructor(public payload:Product[]) {}
  }
  
  export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems;    
