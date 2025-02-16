import { Component } from '@angular/core';
import {Products} from "./models/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB5';
  products: Products[] = data
}
