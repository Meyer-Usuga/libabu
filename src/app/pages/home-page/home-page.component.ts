import { Component } from '@angular/core';
import {
  ButtonComponent,
  BookCardComponent,
  InputComponent,
} from 'app/shared/components';
@Component({
  selector: 'app-home-page',
  imports: [ButtonComponent, BookCardComponent, InputComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly featuredBooks = [
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_eu7hvu.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086993/image_1_ok16tl.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_2_b0v9b5.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_2_sdeaiz.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086988/image_1_pq8sbx.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_2_sdeaiz.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086988/image_1_pq8sbx.png',
  ];
}
