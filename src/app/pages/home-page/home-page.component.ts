import { Component } from '@angular/core';
import { ButtonComponent } from 'app/shared/components';
@Component({
  selector: 'app-home-page',
  imports: [ButtonComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
