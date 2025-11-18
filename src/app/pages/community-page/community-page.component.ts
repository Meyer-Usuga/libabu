import { Component } from '@angular/core';
import {
  BoxComponent,
  InputComponent,
  ButtonComponent,
  BookCardComponent,
} from 'app/shared/components';

@Component({
  selector: 'app-community-page',
  imports: [BoxComponent, InputComponent, ButtonComponent, BookCardComponent],
  templateUrl: './community-page.component.html',
  styleUrl: './community-page.component.scss',
})
export class CommunityPageComponent {
  readonly popularClubs = [
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433979/content-l_v6o8jj.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433997/image_fvjlll.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433979/image_1_hdifuu.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433997/image_2_b9stc4.png',
  ];

  readonly recentClubs = [
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433976/content-l_1_ewlmq9.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433976/content-l_2_o3azri.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433978/content-l_3_cutvzd.png',
    'https://res.cloudinary.com/db1tp6eqg/image/upload/v1763433978/content-l_4_wvzxhl.png',
  ];
}
