import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <img [src]="product.images[0]" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div class="rating">Rating: {{ product.rating }}/5</div>
      <div class="likes">Likes: {{ product.likes }}</div>
      <button (click)="onLike()">Like</button>
      <button (click)="share('whatsapp')">Share on WhatsApp</button>
      <button (click)="share('telegram')">Share on Telegram</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      margin: 1rem;
      border-radius: 8px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product.id);
  }

  share(platform: 'whatsapp' | 'telegram') {
    const url = encodeURIComponent(this.product.kaspiLink);
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    } else {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`);
    }
  }
} 