import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { ProductCardComponent } from "../../ui/product-card/product-card.component";
import { OwlCaroselComponent } from "../../ui/owl-carosel/owl-carosel.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [OwlCaroselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(public api:ApiService){

  }
  @Input()
  categories:[]=[];
  ngOnInit(){
    this.api.getcategory().subscribe((res:any)=>{
      this.categories =res;
    });
  }
}
