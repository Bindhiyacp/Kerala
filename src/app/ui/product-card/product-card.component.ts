import { Component, Input } from '@angular/core';
import { myproductcard } from '../../interface/all-interfaces';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() pro:myproductcard={
    id: 0,
    title: '',
    description: '',
    image: '',
    categories:''
  }

}
