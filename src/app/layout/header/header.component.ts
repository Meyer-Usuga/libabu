import { Component } from '@angular/core';
import { ButtonComponent } from 'app/shared/components';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
