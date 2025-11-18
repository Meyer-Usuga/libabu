import { Component, input } from '@angular/core';
import { BookCardComponent } from '../book-card';
import { BookPreview } from '@core/interfaces';
import { ButtonComponent } from '../button';

@Component({
  selector: 'app-book-preview',
  imports: [BookCardComponent, ButtonComponent],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  readonly bookSummary = input.required<BookPreview>();
}
