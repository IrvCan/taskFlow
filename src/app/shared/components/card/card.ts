import { afterRenderEffect, Component, contentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {

  protected title = contentChild<ElementRef>('cardTitle');

  constructor() {
    afterRenderEffect(() => {

      const element = this.title();

      if (!element) {
        return;
      }

      console.log(
        element.nativeElement.textContent
      );

    });
  }


}