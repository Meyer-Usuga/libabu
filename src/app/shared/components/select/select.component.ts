import { Component, input } from '@angular/core';
import { SelectValue } from '@core/interfaces';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  readonly options = input.required<SelectValue[]>();
}
