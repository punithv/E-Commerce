
// import { InitialState } from '@ngrx/store/src/models';
// import { data} from "src/app/modal/data";
// const initialState = {
//     data:[{
//         id: 1,
//       name: "Product 1",
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//       price: "100.00",
//       quantity: "10",
//       image: "https://elcopcbonline.com/photos/product/4/176/4.jpg"
//     }
// ],
// loading:false,
// loaded:true
// }


// export function ItemsReducer(state=initialState,action){
//     switch(action.type){
//         case "Load_Items":{
//             return{
//                 ...state,
//                 loading:true,
//                 loaded:false
//             }
//         }
//         default:{
//             return state;

//         }

//     }
     
// }
import { ActionsUnion, ActionTypes } from '../state/items.action';
import{ Product } from "src/app/modal/product";
import * as fromRoot from 'src/app/components/status/app.state';  

   export interface ProductState{
       product:Product[];
       cart:Product[];
       
   } 

  //  export interface AppState {
  //        product:Product[];
  //  }
    export const initialState= {
        product:[],
        cart:[],
    };
    
    export function ItemsReducer(state=initialState, action: ActionsUnion):ProductState{
        switch (action.type) {
            case ActionTypes.LoadSuccess:
              return {
                ...state,
               product: [...action.payload]
              };
        
            case ActionTypes.Add:
              return {
                ...state,
                cart: [...state.cart, action.payload]
              };
        
            case ActionTypes.Remove:
              return {
                ...state,
                cart: [...state.cart.filter(product=> product.name !== action.payload.name)]
              };
        
            default:
              return state;
          }
        }