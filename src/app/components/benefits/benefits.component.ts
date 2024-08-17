import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { BENEFITS } from '../../core/constants/benefits';

@Component({
  selector: 'em-benefits',
  standalone: true,
  imports: [
    TitleComponent,
    CommonModule
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits = BENEFITS;
}
