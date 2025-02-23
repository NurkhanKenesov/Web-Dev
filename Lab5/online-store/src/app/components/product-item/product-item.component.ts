import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <img [src]="product.images[currentImageIndex]" [alt]="product.name">
      <div class="gallery-nav" *ngIf="product.images.length > 1">
        <button (click)="prevImage()">←</button>
        <button (click)="nextImage()">→</button>
      </div>
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
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  
  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.product.images.length - 1 
      : this.currentImageIndex - 1;
  }

  onLike() {
    this.like.emit(this.product.id);
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

  share(platform: 'whatsapp' | 'telegram') {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    } else {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`);
    }
  }
} 