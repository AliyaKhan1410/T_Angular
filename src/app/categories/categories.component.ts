import { Component, Input } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() categories: string[] = [];
}
