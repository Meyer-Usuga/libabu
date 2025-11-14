import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  readonly type = input<string>('text');
  readonly placeholder = input<string>('text');
  readonly inputId = signal(
    `input-${Math.random().toString(36).substring(2, 15)}`
  );
}
