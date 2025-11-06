import { Component, input } from '@angular/core';
import { TypeSquareButton, TypeButton } from '@core/interfaces';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly type = input.required<TypeButton>();
  readonly shape = input<TypeSquareButton>('square');
  readonly disabled = input<boolean>(false);
}
