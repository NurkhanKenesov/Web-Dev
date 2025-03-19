import { Component } from '@angular/core';
import {Category} from '../../models/category';
import {categories} from '../../data/category'
import {Products} from '../../models/product';
import {products} from '../../data/products'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = categories;
  products = products;
  show:Category[] = [];
  likes:number = 0;
  ngOnInit(){
    for (let i of categories){
      if(i.choose){
        this.show.push(i)
      }
    }
  }
  update(category:Category){
    if (!category.choose){
      this.show.push(category);
      category.choose = true;
    }
    else{
      this.show = this.show.filter(add => add != category)
      category.choose = false;
    }
  }
  like(increase:number){
    this.likes += increase;
  }
}
