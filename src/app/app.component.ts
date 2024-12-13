import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ImageGridComponent,
    CategoriesComponent,
    NavbarComponent,
    CommonModule  // Ensure CommonModule is imported for NgIf and other common features
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProductsAndCategories();
  }

  fetchProductsAndCategories() {
    const productUrl = 'https://fakestoreapi.com/products';
    const categoryUrl = 'https://fakestoreapi.com/products/categories';

    this.http.get<any[]>(productUrl).subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data. Please try again later.';
        this.loading = false;
      }
    });

    this.http.get<string[]>(categoryUrl).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error fetching categories', err);
      }
    });
  }
}
