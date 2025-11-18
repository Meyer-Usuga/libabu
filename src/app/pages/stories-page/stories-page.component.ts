import { Component } from '@angular/core';
import { BookPreview, Steps } from 'app/core/interfaces';
import {
  BoxComponent,
  StepsComponent,
  BookPreviewComponent,
  ButtonComponent,
} from 'app/shared/components';

@Component({
  selector: 'app-stories-page',
  imports: [
    BoxComponent,
    StepsComponent,
    BookPreviewComponent,
    ButtonComponent,
  ],
  templateUrl: './stories-page.component.html',
  styleUrl: './stories-page.component.scss',
})
export class StoriesPageComponent {
  readonly listSteps: Steps[] = [
    {
      step: 'all',
      label: 'Todos',
      active: true,
    },
    {
      step: 'published',
      label: 'Publicados',
      active: false,
    },
    {
      step: 'drafts',
      label: 'Borradores',
      active: false,
    },
  ];

  readonly books: BookPreview[] = [
    {
      id: 'B-1',
      image:
        'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763438334/content-l_5_dwiwmc.png',
      title: 'Creators Call',
      chapters: 95,
      lastUpdate: 'Julio. 26, 2024 - 1:20 AM',
      statistics: {
        views: 1004,
        stars: 456,
        comments: 225,
      },
    },
    {
      id: 'B-2',
      image:
        'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763438340/image_3_sswyug.png',
      title: 'The Flight of the Darkstar Dragon',
      chapters: 105,
      lastUpdate: 'Marzo. 22, 2025 - 11:59 PM',
      statistics: {
        views: 5452,
        stars: 453,
        comments: 682,
      },
    },
  ];
}
