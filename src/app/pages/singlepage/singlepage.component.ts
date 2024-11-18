import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myproductcard } from '../../interface/all-interfaces';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-singlepage',
  standalone: true,
  imports: [],
  templateUrl: './singlepage.component.html',
  styleUrl: './singlepage.component.scss'
})
export class SinglepageComponent {

  constructor(
    private route : ActivatedRoute,
    public api:ApiService){

  }
  id:any;
  @Input() product:myproductcard={
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
  ngOnInit(){
    this.id =this.route.snapshot.paramMap.get('id');
    this.api.getproductbyid(this.id).subscribe((res:any)=>{
      this.product =res;
    });
}

}
