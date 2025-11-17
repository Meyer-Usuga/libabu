import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [NgStyle],
  standalone: true,
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  readonly backgroundImage = input<string>();
}
