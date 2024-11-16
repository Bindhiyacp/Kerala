import { Component } from '@angular/core';
import { MyCardComponent } from "../../ui/my-card/my-card.component";

@Component({
  selector: 'app-dus',
  standalone: true,
  imports: [MyCardComponent],
  templateUrl: './dus.component.html',
  styleUrl: './dus.component.scss'
})
export class DusComponent {

  dulist = [{
    id:1,
    name:"DU1",
    describe:"Known as the Venice of the East it’s famous for backwaters, houseboats, and the Nehru Trophy boat race.",
    image:"images/alapuzha.png"
  },
  {
    id:2,
      name:"DU2",
      describe:" Known for its handloom industry, Theyyam ritual art form, and beautiful beaches.",
      image:"images/kannur.png"
  },
  {
    id:3,
      name:"DU3",
      describe:" Formerly Calicut, famous for its historical trade connections, beaches, and Kozhikode biryani.",
      image:"images/kozhikode.png"
  },
  {
    id:4,
    name:"DU4",
    describe:"The commercial capital of Kerala, home to the bustling city of Kochi, known for its port and cultural blend.",
    image:"images/ernakulam.png"
  },
  {
    id:5,
      name:"DU5",
      describe:"A scenic, mountainous district known for its spice plantations, wildlife sanctuaries, and the Idukki Arch Dam.",
      image:"images/idukki.png"
  },
  {
    id:6,
      name:"DU6",
      describe:" Kerala's northernmost district, famous for Bekal Fort, beaches, and its cultural diversity.",
      image:"images/kasaragod.png"
  },
  {
    id:7,
    name:"DU7",
    describe:"Famous for Ashtamudi Lake and its cashew industry, Kollam is a beautiful blend of backwaters and heritage.",
    image:"images/kollam.png"
  },
  {
    id:8,
      name:"DU8",
      describe:"A land of lakes and lush rubber plantations, Kottayam is also known for its literacy rate and religious harmony.",
      image:"images/kottayam.png"
  }
]
}
