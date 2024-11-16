import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { myproductcard } from '../../interface/all-interfaces';
import { ApiService } from '../../api.service';
import { ProductCardComponent } from "../product-card/product-card.component";


@Component({
  selector: 'app-owl-carosel',
  standalone: true,
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './owl-carosel.component.html',
  styleUrl: './owl-carosel.component.scss'
})
export class OwlCaroselComponent {
  @Input() category:any='';
  data:any;
  constructor(public api:ApiService){

  }
  ngOnInit(){
    this.api.getproductbycategory(this.category).subscribe((res:any)=>{
      this.data =res;
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



}
