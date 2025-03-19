import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {HeadComponent} from "./components/head/head.component";
import {RouterModule} from "@angular/router";
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeadComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: CategoryComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,HeadComponent]
})
export class AppModule { }
