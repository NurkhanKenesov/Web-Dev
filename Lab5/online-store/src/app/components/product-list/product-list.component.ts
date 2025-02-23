import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="products-grid">
      @for (product of products; track product.id) {
        <app-product-item
          [product]="product"
          (remove)="onRemoveProduct($event)"
          (like)="onLikeProduct($event)"
        />
      }
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onRemoveProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  onLikeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
} 