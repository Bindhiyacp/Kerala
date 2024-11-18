import { Component, Input } from '@angular/core';
import { myproductcard } from '../../interface/all-interfaces';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SlicePipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() pro:myproductcard={
    id: 0,
    title: '',
    price:0,
    description: '',
    image: '',
    categories:'',
    rating:{
      rate:0,
      count:0
    }
  }

}
