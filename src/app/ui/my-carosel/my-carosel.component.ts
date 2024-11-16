import { Component, Input } from '@angular/core';
import { mycarosel } from '../../interface/all-interfaces';

@Component({
  selector: 'app-my-carosel',
  standalone: true,
  imports: [],
  templateUrl: './my-carosel.component.html',
  styleUrl: './my-carosel.component.scss'
})
export class MyCaroselComponent {

  carosellist = [{
    id:1,
    name:"img1",
    image:"images/scenery.jpg"
  },
  {
    id:2,
      name:"img2",
      image:"images/sea.jpg"
  },
  {
    id:3,
      name:"img3",
      image:"images/boaty.jpg"
  }]

}
