import { Component , Input, Output, EventEmitter} from '@angular/core';
//import { Clipboard } from '@angular/cdk/clipboard';
import {Category} from "../../models/category";
import {products} from "../../data/products";
import {Products} from "../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  @Input() status !: Category[]
  products = products

  @Output() numLiked = new EventEmitter();
  details = new Array<boolean>(products.length)
  share(link:string) {
    window.open("https://telegram.me/share/url?url=" + link)
  }
  inList(category:string){
    for (let i of this.status){
      if (i.type == category){
        return true;
      }
    }
    return false;
  }
  delete(product:Products){
    product.visible=false;
    if (product.liked){
      product.liked = false;
      this.numLiked.emit(-1);
    }
  }

  like(product:Products){
    if (!product.liked){
      product.liked = true;
      this.numLiked.emit(1);
    }
    else {
      product.liked = false;
      this.numLiked.emit(-1);
    }
  }
}
