import { Component } from '@angular/core';
import { MyCardComponent } from "../../ui/my-card/my-card.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MyCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  // list = [{
  //   id:1,
  //   name:"Alappuzha",
  //   describe:"python",
  //   image:"images/alapuzha.png"
  // },
  // {
  //   id:2,
  //     name:"Kannur",
  //     describe:"java",
  //     image:"images/kannur.png"
  // },
  // {
  //   id:3,
  //     name:"Kozhikode",
  //     describe:"html",
  //     image:"images/kozhikode.png"
  // },
  // {
  //   id:4,
  //   name:"Ernakulam",
  //   describe:"css",
  //   image:"images/ernakulam.png"
  // },
  // {
  //   id:5,
  //     name:"Idukki",
  //     describe:"django",
  //     image:"images/idukki.png"
  // }
  // ]

}
