import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../core/constants/testimonials';

@Component({
  selector: 'em-testimonials',
  standalone: true,
  imports: [
    TitleComponent,
    CommonModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
  currentItem: number = 0;

  prev(): void {
    const index = this.currentItem - 1;
    this.currentItem = index < 0 ? this.testimonials.length - 1 : index;
  }

  next(): void {
    const index = this.currentItem + 1;
    this.currentItem = index >= this.testimonials.length ? 0 : index;
  }
}
