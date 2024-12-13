import { Component, Input } from '@angular/core';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  imports: [
    SlicePipe,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent {
  @Input() products: any[] = [];
}
