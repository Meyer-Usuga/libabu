import { Component, input, output } from '@angular/core';
import { Steps } from '@core/interfaces';
import { ButtonComponent } from '../button';

@Component({
  selector: 'app-steps',
  imports: [ButtonComponent],
  standalone: true,
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent {
  readonly steps = input.required<Steps[]>();
  readonly onChange = output<string>();

  onChangeStep(step: string) {
    this.onChange.emit(step);
  }
}
