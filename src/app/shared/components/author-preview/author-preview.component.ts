import { Component, input } from '@angular/core';
import { AuthorPreview } from '@core/interfaces';
import { BookCardComponent } from '../book-card';

@Component({
  selector: 'app-author-preview',
  imports: [BookCardComponent],
  templateUrl: './author-preview.component.html',
  styleUrl: './author-preview.component.scss',
})
export class AuthorPreviewComponent {
  readonly authorSummary = input.required<AuthorPreview>();
}
