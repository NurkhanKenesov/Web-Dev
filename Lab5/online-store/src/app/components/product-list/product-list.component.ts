import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService, ProductFilters } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductItemComponent],
  template: `
    <div class="filters">
      <div class="price-filters">
        <label>
          Price Range:
          <input 
            type="number" 
            [(ngModel)]="filters.minPrice" 
            placeholder="Min Price"
            (ngModelChange)="applyFilters()"
          >
          <input 
            type="number" 
            [(ngModel)]="filters.maxPrice" 
            placeholder="Max Price"
            (ngModelChange)="applyFilters()"
          >
        </label>
      </div>

      <div class="rating-filter">
        <label>
          Min Rating:
          <input 
            type="number" 
            [(ngModel)]="filters.minRating" 
            min="0" 
            max="5" 
            step="0.1"
            (ngModelChange)="applyFilters()"
          >
        </label>
      </div>

      <div class="likes-filter">
        <label>
          Min Likes:
          <input 
            type="number" 
            [(ngModel)]="filters.minLikes" 
            min="0"
            (ngModelChange)="applyFilters()"
          >
        </label>
      </div>

      <div class="sort-options">
        <label>
          Sort by:
          <select [(ngModel)]="filters.sortBy" (ngModelChange)="applyFilters()">
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="likes">Likes</option>
          </select>
        </label>

        <label>
          Order:
          <select [(ngModel)]="filters.sortOrder" (ngModelChange)="applyFilters()">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
    </div>

    <div class="product-list">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (remove)="onRemoveProduct($event)"
        (like)="onLikeProduct($event)"
      ></app-product-item>
    </div>
  `,
  styles: [`
    .filters {
      background: #f5f5f5;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .filters label {
      display: block;
      margin-bottom: 0.5rem;
    }

    .filters input, .filters select {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 0.5rem;
    }

    .price-filters input {
      width: 100px;
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `]
})
export class ProductListComponent {
  @Input() categoryId!: number;
  products: Product[] = [];
  
  filters: ProductFilters = {
    sortOrder: 'desc'
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  ngOnChanges() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProductsByCategory(this.categoryId, this.filters);
  }

  applyFilters() {
    this.loadProducts();
  }

  onRemoveProduct(productId: number) {
    this.productService.removeProduct(productId);
    this.loadProducts();
  }

  onLikeProduct(productId: number) {
    this.productService.incrementLikes(productId);
  }
} 