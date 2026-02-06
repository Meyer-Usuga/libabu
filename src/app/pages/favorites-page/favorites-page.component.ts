import { Component } from '@angular/core';
import { AuthorPreview } from '@core/interfaces';
import {
  AuthorPreviewComponent,
  BoxComponent,
  InputComponent,
} from 'app/shared/components';

@Component({
  selector: 'app-favorites-page',
  imports: [BoxComponent, InputComponent, AuthorPreviewComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent {
  readonly favoriteAuthors: AuthorPreview[] = [
    {
      id: 'A-1',
      name: 'eVEM',
      username: '@eVEm',
      avatar:
        'https://res.cloudinary.com/db1tp6eqg/image/upload/v1770347987/Ellipse_1_gu9frg.svg',
      historiesCount: 25,
      followersCount: 1500,
      followersHistoriesCount: 3000,
    },
    {
      id: 'A-2',
      name: 'vepiex4',
      username: '@vepiex4',
      avatar:
        'https://res.cloudinary.com/db1tp6eqg/image/upload/v1770347986/Ellipse_1_1_j2bkfh.svg',
      historiesCount: 40,
      followersCount: 2500,
      followersHistoriesCount: 5000,
    },
    {
      id: 'A-3',
      name: 'M.J..',
      username: '@Mj',
      avatar:
        'https://res.cloudinary.com/db1tp6eqg/image/upload/v1770347986/Ellipse_1_lujttp.png',
      historiesCount: 40,
      followersCount: 2500,
      followersHistoriesCount: 5000,
    },
  ];
}
