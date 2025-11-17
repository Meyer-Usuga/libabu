import { Component } from '@angular/core';
import {
  BookCardComponent,
  BoxComponent,
  ButtonComponent,
  InputComponent,
  SelectComponent,
} from 'app/shared/components';

@Component({
  selector: 'app-explore-page',
  imports: [
    BoxComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    BookCardComponent,
  ],
  standalone: true,
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss',
})
export class ExplorePageComponent {
  readonly documentTypeOptions = [
    { label: 'Tipo de documento', value: 'option1' },
  ];

  readonly categoryOptions = [{ label: 'Categoría', value: 'option1' }];

  readonly autorOptions = [{ label: 'Autor', value: 'option1' }];

  readonly yearOptions = [{ label: 'Año de publicación', value: 'option1' }];

  readonly languageOptions = [{ label: 'Idioma', value: 'option1' }];

  readonly materiaOptions = [{ label: 'Materia', value: 'option1' }];

  readonly labelOptions = [{ label: 'Etiqueta', value: 'option1' }];

  readonly editorialOptions = [{ label: 'Editorial', value: 'option1' }];

  readonly sortedBooks = [
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763355287/content-l_xfytjv.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763355287/image_5_hd017d.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763355287/image_3_wyk12e.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763355287/image_6_hi8s3m.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_eu7hvu.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086993/image_1_ok16tl.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_2_b0v9b5.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086992/image_2_sdeaiz.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763086988/image_1_pq8sbx.png',
  ];
}
