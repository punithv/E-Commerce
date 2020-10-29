import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import{ ItemsReducer} from 'src/app/components/state/items.reducers';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {itemEffect } from 'src/app/components/state/items.effect';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot({product: ItemsReducer}),
    EffectsModule.forRoot([itemEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
