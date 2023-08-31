import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  constructor(private productService: ProductService, private router: Router) {}

  product: Product = {
    name: '',
    price: 1,
  };

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Opreção executada');
      this.router.navigate(['/products']);
    });
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
