import { Injectable } from '@angular/core';
import { Actions,Effect,ofType} from '@ngrx/effects';
import { Action} from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpService} from 'src/app/services/http.service';
import * as AddToCart from 'src/app/components/state/items.action';
import {Product } from 'src/app/modal/product'; 
import { EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class itemEffect {
 

  constructor( 
      private actions$:Actions,private httpservice:HttpService
  ) { }

  @Effect()
      loaditems$ = this.actions$.pipe(
        ofType(AddToCart.ActionTypes.LoadItems),
        mergeMap(() =>
          this.httpservice.getBlogs().pipe(
            map((product) => {
              return { type: AddToCart.ActionTypes.LoadSuccess, payload:product };
            }),
            catchError(() => EMPTY)
          )
        )
      );
}