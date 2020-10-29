import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Product} from 'src/app/modal/product'
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  Data:Product[];
  api = "http://localhost:3000/data"

  constructor( public http:HttpClient) { }

  getBlogs(){
    return this.http.get<Product[]>(this.api)
  }

 

}