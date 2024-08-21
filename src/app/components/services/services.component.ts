import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../core/constants/services';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'em-services',
  standalone: true,
  imports: [
    TitleComponent,
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  services = SERVICES;
  currentItem: number = 2;
  order = [1, 2, 0, 3, 4];
  servicesOrder: typeof SERVICES = [];

  get isMobile(): boolean {
    return screen.width < 550;
  }

  constructor(
    private _cdRef:  ChangeDetectorRef
  ){}
  
  ngOnInit(): void {
    this.order.forEach((item) => {
      this.servicesOrder.push(this.services[item]);
    })
    this.mapServices();
  }

  prev(): void {
    const lastElement = this.order.pop();
    if (lastElement != undefined) {
      this.order.unshift(lastElement);
    }
    this.mapServices();
  }

  next(): void {
    const intiElement = this.order.shift();
    if (intiElement !== undefined) {
      this.order.push(intiElement);
    }
    this.mapServices();
  }

  mapServices(): void {
    this.servicesOrder = [];
    this.order.forEach((item) => {
      this.servicesOrder.push(this.services[item]);
    })
    this._cdRef.markForCheck();
  }

  goToWhatsapp(link: string): void {
    window.open(link, "_blank");
  }
}
