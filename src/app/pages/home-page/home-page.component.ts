import { Component, Input } from '@angular/core';
import { MyCaroselComponent } from "../../ui/my-carosel/my-carosel.component";
import { MyDescriptionComponent } from "../../ui/my-description/my-description.component";
import { MyCardComponent } from "../../ui/my-card/my-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MyCaroselComponent, MyDescriptionComponent, MyCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
 
  cardlist = [{
    id:1,
    name:"Alappuzha",
    describe:"Known as the Venice of the East it’s famous for backwaters, houseboats, and the Nehru Trophy boat race.",
    image:"images/alapuzha.png"
  },
  {
    id:2,
      name:"Kannur",
      describe:" Known for its handloom industry, Theyyam ritual art form, and beautiful beaches.",
      image:"images/kannur.png"
  },
  {
    id:3,
      name:"Kozhikode",
      describe:" Formerly Calicut, famous for its historical trade connections, beaches, and Kozhikode biryani.",
      image:"images/kozhikode.png"
  },
  {
    id:4,
    name:"Ernakulam",
    describe:"The commercial capital of Kerala, home to the bustling city of Kochi, known for its port and cultural blend.",
    image:"images/ernakulam.png"
  },
  {
    id:5,
      name:"Idukki",
      describe:"A scenic, mountainous district known for its spice plantations, wildlife sanctuaries, and the Idukki Arch Dam.",
      image:"images/idukki.png"
  },
  {
    id:6,
      name:"Kasaragode",
      describe:" Kerala's northernmost district, famous for Bekal Fort, beaches, and its cultural diversity.",
      image:"images/kasaragod.png"
  },
  {
    id:7,
    name:"Kollam",
    describe:"Famous for Ashtamudi Lake and its cashew industry, Kollam is a beautiful blend of backwaters and heritage.",
    image:"images/kollam.png"
  },
  {
    id:8,
      name:"Kottayam",
      describe:"A land of lakes and lush rubber plantations, Kottayam is also known for its literacy rate and religious harmony.",
      image:"images/kottayam.png"
  },
  {
    id:9,
      name:"Malappuram",
      describe:"A district rich in cultural heritage, known for its historical significance and vibrant festivals.",
      image:"images/malappuram.png"
  },
  {
    id:10,
    name:"Palakkad",
    describe:"Known as the Rice Bowl of Kerala it features the Palakkad Gap and scenic paddy fields.",
    image:"images/palakkad.png"
  },
  {
    id:11,
      name:"Pathanamthitta",
      describe:"Known as the Pilgrim Capital of Kerala, it is home to the Sabarimala Temple, a major pilgrimage center.",
      image:"images/pathanamthitta.png"
  },
  {
    id:12,
      name:"Thiruvanandhapuram",
      describe:"The capital city, known for its historic sites, beaches like Kovalam, and the famous Padmanabhaswamy Temple.",
      image:"images/thiruvandrum.png"
  },
  {
    id:13,
    name:"Thrisssur",
    describe:"Often called the Cultural Capital of Kerala known for the Thrissur Pooram festival and historic temples.",
    image:"images/thrissur.png"
  },
  {
    id:14,
      name:"Wayanad",
      describe:" Known for its green hills, coffee plantations, and wildlife sanctuaries, offering a cool retreat.",
      image:"images/wayanad.png"
  }]
}
