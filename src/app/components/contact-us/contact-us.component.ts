import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'em-contact-us',
  standalone: true,
  imports: [TitleComponent, ButtonComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
