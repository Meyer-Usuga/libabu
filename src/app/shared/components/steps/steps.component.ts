import { Component, input, output } from '@angular/core';
import { Steps } from '@core/interfaces';
@Component({
  selector: 'app-steps',
  imports: [],
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
