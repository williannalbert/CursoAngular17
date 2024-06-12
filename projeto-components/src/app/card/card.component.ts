import { Component, Input } from '@angular/core';

function handlePlanType(value: string) {
  console.log('handlePlanType', value);

  return value.toUpperCase();
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // @Input({ required: true, alias: 'planPriceAlias', transform: numberAttribute }) planPrice: number = 0;
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;
  @Input({ alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = '';

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);
    
    // console.log('planType', this.planType); //GET
    // this.planType = 'Teste' //SET
  }
}
